import { useContext, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import SingUp from './Component/SingUp';
import Login from './Component/Login';
import Context from './Component/Context';
import {Routes,Route} from "react-router-dom"
import Dashbord from './Component/Dashbord';
import AddnewData from './Component/AddnewData';



function App() {
  
 const getData = (data) => {
    console.log("Hello",data)
 }
 
  return (
    <div className="App">
    <Context>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SingUp/>}/>
      <Route path='/login' element={<Login/>}/>
          <Route path='/dashbord' element={<Dashbord onSubmit = {getData} />}/>
          <Route path='/Addnew' element={<AddnewData value={getData()} />}/>
          <Route path='/edit/:id' element={<AddnewData value = {getData}/>}/>
      </Routes>
    </Context>
        </div>    
  );
}

export default App;
