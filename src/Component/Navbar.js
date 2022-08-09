import React, { useContext } from 'react'
import { ContextProvider } from './Context'
import {Link} from "react-router-dom"
function Navbar() {
  const {singup,openmodel} = useContext(ContextProvider)
  console.log("mymodel",singup)

  const openform = () => {
    openmodel()
  }
  return (
    <div>
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
        <li className="nav-item">
        </li>
      </ul>
      <ul className="navbar-nav"onClick={openform}>
      {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Singup</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar