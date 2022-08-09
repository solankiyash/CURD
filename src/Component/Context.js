import React,{createContext, useState,useEffect} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
export const ContextProvider = createContext();
function Context(props) {
    const [singup,setSingup] = useState(false)
    const [alldata,setAlldata] = useState([])

  const id = useParams()
  
    
    const edite = () => {
      <input type="text" placeholder='Enter Title'/>
    }
    const openmodel = () => {
        setSingup(true)
    }
    const [email,setEmail] = useState("")
    const [date,setDate] = useState("")
    
    const [edit,setEdit] = useState()

    const [addFormData,setAddFormData] = useState({
      title:""
    })
    
    
      useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>setAlldata(res.data)).catch((err)=>console.log(err))
      },[]) 
  
      
  
  return (
    <ContextProvider.Provider value={{singup,openmodel,email,setEmail,date,setDate,edit,setEdit,addFormData,setAddFormData,alldata}}>
        {props.children}
    </ContextProvider.Provider>
  )
}

export default Context