import { useContext, useState } from "react";
import "./App.css";
// import Navbar from "./Component/Navbar";
import Context from "./Component/Context";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./Component/Dashbord";
import AddnewData from "./Component/AddnewData";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Component/Navbar";




function App() {
  const getData = (data) => {
    console.log("Hello", data);
  };

  return (
    <div className="App">
      
    
      <Context>
       
       
        <Routes>
            <Route path='/' element={<Navbar/>}/>
          {/* <Route path='/' element={<SingUp/>}/> */}
          {/* <Route path='/' element={<SingUp/>}/> */}
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path="/dashbord" element={<Dashbord onSubmit={getData} />} />
          <Route path="/Addnew" element={<AddnewData value={getData()} />} />
          <Route path="/edit/:id" element={<AddnewData value={getData} />} />
        </Routes>
      </Context>
    </div>
  );
}

export default App;
