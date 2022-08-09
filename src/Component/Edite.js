import React, { useContext, useState } from 'react'
import { ContextProvider } from './Context'
import { useNavigate, useParams} from "react-router-dom"
import { Button, Form, Input, DatePicker } from 'antd';

function Edite() {
    const {alldata} = useContext(ContextProvider)
    const [data,setData] = useState(alldata)
    const navigate = useNavigate()

    const [title,setTitle] = useState("")
    const [userid,setUserId] = useState("")

    const handelSubmit = (e) => {
          let item = {title:title,userid:userid}
          let tmp = data
          tmp[id-1] = {
            id: id,
            userId: tmp[id-1].userId,
            title
          }
          
          setData(tmp)
          
            alert("your data successfully updated")
                navigate("/dashbord")
          
        }    

   const {id} = useParams()

  return (
    
        <Form
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 10,
        }}
       
        onFinish={handelSubmit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="Title"
          type="text "
          // // rules={[
          // //   {
          // //     required: true,
          // //     pattern: new RegExp("@"),
          // //     message: 'Enter a valid email address!',
          // //   },
          // ]}
        >
          <Input value={title} onChange={(e) => setTitle(e.target.value)} defaultValue={alldata[id-1].title}/>
        </Form.Item>
        <Form.Item
          label="UserId"
          name="UserId"
          type="phone"
          
        >
          <Input value={userid} disabled onChange={(e) => setUserId(e.target.value)} defaultValue={alldata[id-1].id}/>
        </Form.Item>
          
                 <Button onClick={handelSubmit}>Submit</Button>
                
            </Form>
          

        
    
   
  
  )
}

export default Edite