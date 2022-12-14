import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const olddata = JSON.parse(
    localStorage.getItem(email.includes("@") && email)
  );

  const onFinish = (values) => {
    const { email, password } = values;
    const data = localStorage.getItem(email);

    const a = JSON.parse(data);
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
    toast.success("your data is submitted");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
                    type="email"
                    rules={[
                      {
                        required: true,
                        message: "Enter a valid email address!",
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      },
                      {
                        validator: () => {
                          if (olddata?.email !== email) {
                            return Promise.reject("plese check email");
                          } else {
                            return Promise.resolve();
                          }
                        },
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      {
                        validator: () => {
                          if (olddata?.password !== password) {
                            return Promise.reject("plese check password");
                          } else {
                            return Promise.resolve();
                          }
                        },
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 10,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./image/Singup.webp" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Login;
