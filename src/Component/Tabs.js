import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextProvider } from './Context'
import Login from './Login'
import SingUp from './SingUp'

function Tabs(props) {
    const navigate = useNavigate()
    const {model,item,state} = useContext(ContextProvider)

    
   const [data,setData] = useState(state)

   
    
    const handelSingUP = () => {
        setData(false)
        console.log(data,"data")
    }
    const handelSingIN = () => {
        setData(true)
        console.log(data,"result")
    }
  return (
    <div>
        <button onClick={handelSingUP}>SingUp</button>
        <button onClick={handelSingIN}>SingIN</button>

      {
        data === false ? <SingUp/> : data === true ? <Login/> :""
      }

    </div>
  )
}

export default Tabs