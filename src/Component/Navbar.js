import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from './Context'
import Login from './Login'
import SingUp from './SingUp'

function Navbar(props) {

  const {model,item,state} = useContext(ContextProvider)

    const [data,setData] = useState(state)
    const [local1,setLocal1] = useState(localStorage.getItem("alldata"))
    const [local2,setLocal2] = useState(localStorage.removeItem("alldata"))
    console.log("local",local1)
    console.log(local2,"local2")
    
  const [item1,setItem1] = useState(item)

  const [open,setOpen] = useState("Open")
    const handelSinup = () => {
      setData(true)
      console.log(data,"data")
  }
  const handelSinin = () => {
    setData(false)
    setLocal1()
     console.log(item1,"item")
      
  }
  
  return (
    <div>
      {local2 ===  undefined ? 
       <div className='Navbar'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"padding":"0"}}>
       <div className="container-fluid"style={{"background":"#CAD3C8"}}>
   <a className="navbar-brand" href="#" >User Registration</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="#">Home</a>
       </li>
      <>
           <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={handelSinup} to="/">SingUp</Link>
       </li>  <li className="nav-item">
         <Link className="nav-link active" aria-current="page" onClick={handelSinin} to="/">SingIN</Link>
       </li> 
       </>  
         
     </ul>
   </div>
 </div>
</nav>
      
</div>
    : local1 !== "" ? <>
    <li className="nav-item">
  <Link className="nav-link active" aria-current="page" onClick={handelSinup} to="/">SingUp</Link>
</li>  <li className="nav-item">
  <Link className="nav-link active" aria-current="page" onClick={handelSinin} to="/">SingIN</Link>
</li> 
</>  : ""}
   
      {
        data === true ? <SingUp/> : <Login/> 
      }
    
    </div>
   
  )
}

export default Navbar