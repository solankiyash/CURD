import React, { useContext, useState } from 'react'
import { Button,Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { ContextProvider } from './Context';


function Login() {
  const navigate = useNavigate()
  const {email,setEmail,model,item,state} = useContext(ContextProvider)
  const [password,setPassword] = useState("")
  
  const [data,setData] = useState(state)
 

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handelSubmit = () => {
    const item = { email, password }
    const data = localStorage.getItem(email)
    if (email == "" || email === undefined) {
      return alert("please check email")
    }
    if (password == "" || password === undefined){
      return alert("please check password")
    }
    else {
      let a = JSON.parse(data)
      if (a.password === password) { navigate("/dashbord") }
      else {
        return alert("please check email")  
       
      }
       localStorage.setItem("data",JSON.stringify(a))
       localStorage.setItem("alldata",JSON.stringify(a))
       setData(true)
    }
   
  }
  
  return (
    <div>
       {data === false ? 
        <>
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
                {/* <span style={{"cursor":"pointer","padding-left":"40px"}}  onClick={()=>navigate("/")}>Create New Account?</span> */}
              </Form>
              </div>
              </div>  
                  <div className='col-md-6'>
                    <img src='./image/Singup.webp'/>
                  </div>
              </div>
          </div>
          </>
        :""}
    </div>
  )
}

export default Login