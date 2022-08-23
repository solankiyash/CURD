import React, { useContext, useEffect, useState } from 'react'
import { ContextProvider } from './Context'
import { Form, Input} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

function AddnewData({value}) {
 console.log(value,"value")
    let {alldata} = useContext(ContextProvider)
  
    let [data,setData] = useState(alldata)
    
    const {id} = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const Addalldata = (e) => {
    // add data
   
        let item = {title:title,id:alldata[alldata.length -1].id + 1 ,userId:10}
        e.preventDefault()
        if(value === undefined){
       if (data.push(item)){
        alert("your data successfully insert")
            navigate("/dashbord")
            
       }else{
        alert("Sorry your data not insert")
       }
      
      }
      // Edit  data
    
       let tmp = data
       tmp[id-1] = {
        id: id,
        userId: tmp[id-1].userId,
        title
        
      }
      setData(tmp)
      alert("your data successfully updated")
                navigate("/dashbord")
    
    
    // console.log(value,"value")
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
        <div className='btn btn-dark'onClick={Addalldata}>Submit</div>
        </Form>
    </div>
  )
}

export default AddnewData