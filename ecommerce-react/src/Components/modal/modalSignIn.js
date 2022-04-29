//React and hooks
import React, {useState} from "react";
//Components
import { ModalCustom } from "./modal";
import {Closing} from "./Closing";
//Firebase
import RAM from "../../fireBase";
import {addDoc, collection} from "firebase/firestore";
// MUI
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const   SignIn = () => {
    const [open, setSign] = React.useState(false);
    const handleOpen = () => setSign(true);
    const [message, setMessage] = useState();
    const [storage, setStorage] = useState(false);
    const[Form, SetForm] = useState({
          
            email : "",
            password : "",
    })
 
  const [password, showPassword] = useState("password");
          
  const addSubmit=(e) => {
    e.preventDefault()
    
    let sending = {...Form,
      Sesion: Form,}
     if (storage === true) {
        localStorage.setItem("Sesion", JSON.stringify(sending));
    }
      
  
      console.log("Orden generada",
        Form
      )
     push(sending) 
    
    }
  const push= async (sending) => {
  const toFirebase = collection(RAM, 'Sesiones')
      const to =  await addDoc(toFirebase, sending)
      console.log("Orden generada",
      to
    )
  setMessage(to)
    }
    const addChange = (e) => {
    setStorage(true)
    
        const {value, name} = e.target;
  SetForm({
      ...Form,
    [name] : value,
  
 
     }
      )
  
    }
  



return (
<div>
    
  <button onClick={handleOpen}> Iniciar sesion   </button>  
    <ModalCustom open={open} onClose={addSubmit}>
 
  <h2>Iniciar sesion</h2>
  {message ? (
       <div>
       <div> ¡Has iniciado sesion!</div>   
   
       <Closing setSign={setSign}/>  
    </div>
     
     ):(
   <div>
   <form onSubmit={addSubmit}>
    <input type="text" name="email" placeholder="Superman@kryptonian.com" className="bloquesito" value={Form.email} onChange={addChange} required/> 

<input type={password} name="password" placeholder="ClarkKent" value={Form.password} onChange={addChange} required />   
<span  id="icon"> <Visibility onClick={()=> showPassword("text")}/><VisibilityOff onClick={()=> showPassword("password")} /></span>
   <label className="bloquesito">Mantener sesion iniciada<input type="checkbox" name="remember"  className="bloquesito" value={storage} onChange={addChange}/></label>
     
      <button className="bloquesito" >Iniciar sesion </button>
      </form>
     <Closing setSign={setSign}/>  </div> )} 
       </ModalCustom>
    </div>
)



}