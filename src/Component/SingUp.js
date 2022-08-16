import React,{useContext, useState} from 'react'
import { Button,Form, Input} from 'antd';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from './Context';
import moment from "moment"



function SingUp() {
  const navigate = useNavigate()
   
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const {date,setDate} = useContext(ContextProvider)

    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    
    const handelClick = (e) => {
        e.preventDefault();
        const convertedDate = moment(date).format('LL')
        var obj = {
          "name":name,
          "email":email,
          "password":password,
          "date":convertedDate.toString()
        }
        
       if(name.length == 0){
        alert("name filed is requred")
       }else if(email === ""){
          alert("email is requred")
       }else if(date === ""){
        alert("date filed is requred")
       }else if(password === ""){
        alert("password filed is requred ")
       }else if(password.length < 6){
        alert("password length greater six ")
       }else{
          navigate("/login")
       }
       localStorage.setItem(obj.email,JSON.stringify(obj))
    }

   
  return (
    <div>
      <div className='constructor'>
        <div className='row'>
          <div className='col-md-6'>
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
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  placeholder='Enter User Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Item>
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
        <Input placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
        label="Birthday date:"
        name="date"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </Form.Item>
        
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <Button type="primary" htmlType="submit" className='mb-3 col-lg-10'  onClick={handelClick}>
          Submit
        </Button>
      </Form.Item>
      <span style={{"cursor":"pointer"}}  onClick={()=>navigate("/login")}>Already Have an account?</span>
    </Form>
    </div>
    <div className='col-md-6'>
      <div className='image'>
      <img src="./image/Singup.webp"/>
      </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default SingUp