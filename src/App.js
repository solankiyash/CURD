import { useContext, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import SingUp from './Component/SingUp';
import Login from './Component/Login';
import Context from './Component/Context';
import { ContextProvider } from './Component/Context';
import {Routes,Route} from "react-router-dom"
import Dashbord from './Component/Dashbord';
import AddnewData from './Component/AddnewData';
import Edite from './Component/Edite';


function App() {

  
 
  return (
    <div className="App">
    <Context>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SingUp/>}/>
      <Route path='/login' element={<Login/>}/>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/Addnew' element={<AddnewData/>}/>
          <Route path='/edit/:id' element={<Edite/>}/>
      </Routes>
    </Context>
        </div>    
  );
}

export default App;
