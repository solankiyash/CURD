import React,{createContext, useState,useEffect} from 'react'
import Axios from 'axios';

export const ContextProvider = createContext();
function Context(props) {
    
    const [alldata,setAlldata] = useState([])

    const [email,setEmail] = useState("")
   
      useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>setAlldata(res.data)).catch((err)=>console.log(err))
      },[])  
  
  return (
    <ContextProvider.Provider value={{email,setEmail,alldata}}>
        {props.children}
    </ContextProvider.Provider>
  )
}

export default Context