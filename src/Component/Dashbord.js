import React, { useContext, useEffect, useState } from 'react'
import { ContextProvider } from './Context'
import { useNavigate } from "react-router-dom"
import {  Table } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from "moment"


function Dashbord(props) {
  const {email} = useContext(ContextProvider) 
  const { alldata,insert,dataupdate } = useContext(ContextProvider)
  const [data1,setData1] = useState(insert) 
  const [data2,setData2] = useState(dataupdate)
  const [users, setUsers] = useState([])
  const [logindata,setlogindata ] = useState([])
  const [state,setState] = useState(false)
  const [show, setShow] = useState(false);

  const [newData,setNewData] = useState(localStorage.setItem("user",JSON.stringify(logindata)))
  
  const handleClose = () => {
    setShow(false);
   const a = localStorage.removeItem("data")  
    setNewData(a)
   
  } 
  const handleShow = () => setShow(true);

  var today = moment().format('LL');
  
  console.log(today.toString(),"today date")
  
  const Birthday = () => {
      const getuser = localStorage.getItem("data")

      if(getuser && getuser.length){
          const user = JSON.parse(getuser)
          setlogindata(user)

          const userbirth = logindata.map((el)=>{
            return el.date === today
          })
          if(userbirth){
            setTimeout(()=>{
               console.log("ok") 
               handleShow();
            },3000)
          }
      }
  }
  useEffect(()=> {
    Birthday()
  },[])
  
  const handelDelete = (id) => {
    let tmp = users
    tmp = tmp.filter((el) => el.id !== id)
    setUsers([...tmp])
  }

  const handelchange = (id) => {
    navigate(`/edit/${id}`)
    props.onSubmit(data1)
    setData2()
    
  }

  const logout = () => {
    navigate("/")
  }
  const AddNew = () => {
    navigate("/Addnew")
    props.onSubmit(data1)
    // console.log(data1,"soolanki")     
  }
  const navigate = useNavigate()

  const data = localStorage.getItem(email)
  const a = JSON.parse(data)

  useEffect(() => {
    setUsers(alldata)
  }, [alldata])

  const close = () => {
    setState(true)
  }
  
  // table data
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: "id"
    },
    {
      title: 'userId',
      dataIndex: 'userId',
      key: "userId"
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: "title"
    },
    {
      title: 'Action',
      render: (recored) => {
        return <>
          <Button id={recored.id} onClick={() => handelchange(recored.id)}>Edit</Button>
          <Button id={recored.id} onClick={() => handelDelete(recored.id)}>DELETE</Button>
        </>
      }
    },
  ];
  return (
    <>
    {
      logindata.length === 0 ? "" : 
      <>
     {
      
      logindata.date === today && state == false && newData !== ""  ?
      <Modal show={show}>
      <Modal.Header closeButton onClick={close}>
        <Modal.Title>{logindata.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Wish you many many happy return of the day</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Ok
        </Button>
      
      </Modal.Footer>
    </Modal> : ""
     }
    </>
    }
    <div className='constructor'>
      <div className='btn btn-dark' onClick={AddNew}>Add New</div>
      <div className='btn btn-dark' onClick={logout}>Logout</div>

      <h4>User Table</h4>
      <Table style={{"width":"80%","margin":"20px 90px"}} columns={columns} dataSource={users} size="middle" />
    </div>
    </>
  )
}

export default Dashbord