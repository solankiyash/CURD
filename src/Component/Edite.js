import React, { useContext, useState } from 'react'
import { ContextProvider } from './Context'
import { useNavigate, useParams} from "react-router-dom"
import { Button, Form, Input} from 'antd';

function Edite() {
    const {alldata} = useContext(ContextProvider)
    const [data,setData] = useState(alldata)
    const [title,setTitle] = useState("")
    const [userid,setUserId] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    const handelSubmit = (e) => {
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
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="Title"
          type="text "
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