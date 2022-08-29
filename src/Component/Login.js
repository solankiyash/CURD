import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { email, setEmail, state } = useContext(ContextProvider);
  const [password, setPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(null);

  const [data, setData] = useState(state);

  const onFinish = (values) => {
    const { email, password } = values;
    const data = localStorage.getItem(email);
    
   

    if (email == "" || email === undefined) {
      return toast.error("please check email");
    }
    if (password == "" || password === undefined) {
      return toast.error("please check password");
    } else {
      let a = JSON.parse(data);

      if (a.password === password) {
        navigate("/dashbord");
        
      } else {
        form.setFields([
          {
            name: password,
            errors: ["forbid ha"],
          },
        ]);
        return;
      }

      localStorage.setItem("data", JSON.stringify(a));
      setData(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handelSubmit = () => {};
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {data === false ? (
        <>
          <div className="constructor">
            <div className="row">
              <div className="col-md-6">
                <div className="singin">
                  <h1>Sign In</h1>
                  <Form
                    form={form}
                    name="basic"
                    labelCol={{
                      span: 9,
                    }}
                    wrapperCol={{
                      span: 10,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      type="email "
                      rules={[
                        {
                          required: true,
                          message: "Enter a valid email address!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter Email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          pattern: "",
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Enter Password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 10,
                      }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        // onClick={handelSubmit}
                      >
                        Login
                      </Button>
                    </Form.Item>
                    {/* <span style={{"cursor":"pointer","padding-left":"40px"}}  onClick={()=>navigate("/")}>Create New Account?</span> */}
                  </Form>
                </div>
              </div>
              <div className="col-md-6">
                <img src="./image/Singup.webp" />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
