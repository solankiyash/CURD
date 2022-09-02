import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "./Context";
import moment from "moment";
import Login from "./Login";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DatePicker, Space } from "antd";

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const { open, setOpen } = useContext(ContextProvider);

  const olddata = JSON.parse(
    localStorage.getItem(email.includes("@") && email)
  );
  const onFinish = (values) => {
    console.log("Success:", values);
    const convertedDate = values.date.format("MMM Do");

    var obj = {
      name: name,
      email: email,
      password: password,
      date: convertedDate.toString(),
    };
    console.log(date, "date");
    if (name === "" && email === "" && date === "" && password === "") {
      setOpen(true);
    } else {
      setOpen(false);

      toast.success("SUCCESSFULLY DATA SUBMIT");
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handelClick = (e) => {
    e.preventDefault();
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

      {open === true ? (
        <div className="constructor">
          <div className="row">
            <div className="col-md-6">
              <h1>Sign Up</h1>
              <Form
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
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                    {
                      min: 3,
                      message: "Username must be grater than three ",
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Enter User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  type="email "
                  rules={[
                    {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Enter a valid email address!",
                    },
                    {
                      validator: () => {
                        if (olddata?.email === email) {
                          return Promise.reject("This email is alrady Taken");
                        } else {
                          return Promise.resolve();
                        }
                      },
                    },
                    { whitespace: true },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Enter email"
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
                      message: "password Required",
                    },
                    { whitespace: true },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "password must be lowercase,upercase,number,spacialcaracter",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label="Birthday date (only 16 +):"
                  name="date"
                  rules={[
                    {
                      required: true,
                      message: "Please input your date!",
                    },
                  ]}
                  hasFeedback
                >
                  {/* <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  /> */}
                  <DatePicker
                    format={"DD-MM-YYYY"}
                    style={{ width: "100%" }}
                    disabledDate={(current) => {
                      return current && current > moment().subtract(16, "year");
                    }}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                ></Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 10,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="col-md-6">
              <div className="image">
                <img src="./image/Singup.webp" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default SingUp;
