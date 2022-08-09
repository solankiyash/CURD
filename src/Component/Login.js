import React, { useContext, useState } from 'react'
import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
import { Routes,Route, useNavigate } from 'react-router-dom'
import Dashbord from './Dashbord';
import { ContextProvider } from './Context';


function Login() {
  const navigate = useNavigate()

const {email,setEmail} = useContext(ContextProvider)
console.log("email",email)
const [password,setPassword] = useState("")

  const handelSubmit = () => {
    const item = { email, password }
    const data = localStorage.getItem(email)
    console.log(data,"result")
  
    if (data === undefined) {
      return alert("please check email")
    } else {
      let a = JSON.parse(data)
      if (a.password === password) { navigate("/dashbord") }
      else {
        return alert("please check email")
        
      }
       localStorage.setItem("data",JSON.stringify(a))
        
    }

  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div>
      <div className='constructor'>
        <div className='row'>
        <div className='col-md-6'>
          <div className='singin'>
      <h1>Sign IN</h1>
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
          label="Email"
          name="Email"
          type="email "
          rules={[
            {
              required: true,
              pattern: new RegExp("@"),
              message: 'Enter a valid email address!',
            },
          ]}
        >
          <Input placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              pattern: "",
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 10,
          }}
        >
         
          <Button type="primary" htmlType="submit" onClick={handelSubmit}>
            Submit
          </Button>
        </Form.Item>
        <span style={{"cursor":"pointer","padding-left":"40px"}}  onClick={()=>navigate("/")}>Create New Account?</span>
      </Form>
      </div>
      </div>  
      <div className='col-md-6'>
        <img src='./image/Singup.webp'/>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Login