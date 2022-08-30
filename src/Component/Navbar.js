import React,{useState,useEffect} from 'react'
import { Button,Form, Input} from 'antd';
import SingUp from "./SingUp"
import Login from "./Login"
function Navbar() {

  const [state,setState] = useState(Boolean)
  console.log(state,"state1")
  
 

  const handelSingUp = () => {
     setState(true)
     console.log(state,"state2")
  }
  const handelSingin = () => {
     setState(false)
     console.log(state,"state3")
}

  return (
    <div>
      <div className='singup'>
          <Button className='btn btn-light'onClick={handelSingUp} >SingUp</Button><span><Button className='btn btn-light' onClick={handelSingin} >SingIn</Button></span>
          </div>
          {
            state === true ? <SingUp/>: state === false  ? <Login/>:""
          }
    </div>
  )
}

export default Navbar