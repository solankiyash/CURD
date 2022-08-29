import React,{useContext, useState} from 'react'
import { Button,Form, Input} from 'antd';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from './Context';
import moment from "moment"
import Login from './Login';
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function SingUp() {
  const navigate = useNavigate()
   
    const [state,setState] = useState(Boolean)
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const {date,setDate} = useContext(ContextProvider)

    const [data,setData] = useState(true)


    
    const onFinish = (values) => {
      console.log('Success:', values);
      const convertedDate = moment(date).format('LL')
        var obj = {
          "name":name,
          "email":email,
          "password":password,
          "date":convertedDate.toString()
        }
        if(name === "" && email === "" && date === "" && password === ""){
            setData(true)
       }
       else{
         setData(false)
         toast.success("SUCCESSFULLY DATA SUBMIT")

       }
       localStorage.setItem(obj.email,JSON.stringify(obj))
      
      
    };
   
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    
    
    const handelClick = (e) => {
        e.preventDefault();
        
       
    }

  
   
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
          
      {data === true ? 
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
          },{
            min:3,
            message:"Username must be grater than three "
          }
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
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
            message: "password Required"
          },
          {
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "password must be lowercase,upercase,number,spacialcaracter",
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
        
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
     
    </Form>
    </div>
    <div className='col-md-6'>
      <div className='image'>
      <img src="./image/Singup.webp"/>
      </div>
      </div>

    </div>
    </div>
    : <Login/>}
    </div>
  )
}

export default SingUp