import React, { useContext, useState } from 'react'
import { ContextProvider } from './Context'
import { Button, Checkbox, Form, Input,DatePicker} from 'antd';
import { useNavigate } from 'react-router-dom';

function AddnewData() {
    let {alldata} = useContext(ContextProvider)
    let [data,setData] = useState(alldata)

    const navigate = useNavigate()
        
    const [title,setTitle] = useState("")
    const addalldata = (e) => {
        let item = {title:title,id:alldata[alldata.length -1].id + 1 ,userId:10}
        e.preventDefault()
        
       if (data.push(item)){
        alert("your data successfully insert")
            navigate("/dashbord")
       }else{
        alert("Sorry your data not insert")
       }
        
    }

  return (
    <div>
        <Form >
        <Form.Item
        label="Title"
        name="title"
      

        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='Enter Title'/>
        </Form.Item>
        <div className='btn btn-dark'onClick={addalldata}>Submit</div>
        </Form>
    </div>
  )
}

export default AddnewData