import React,{useState} from 'react'
import { Button,Form, Input} from 'antd';
import SingUp from "./SingUp"
import Login from "./Login"
function Navbar() {

  const [state,setState] = useState(false)

  const handelSingUp = () => {
     setState(false)
     console.log(state,"singUp")
  }
  const handelSingin = () => {
     setState(true)
     console.log(state,"singIN")
}

  return (
    <div>
      <div className='singup'>
          <Button className='btn btn-light'onClick={handelSingUp} >SingUp</Button><span><Button className='btn btn-light' onClick={handelSingin} >SingIn</Button></span>
          </div>
          {
            state === false ? <SingUp/>: state === true ? <Login/>:""
          }
    </div>
  )
}

export default Navbar