
//React and hooks
import React, {useState} from "react";
// Components
import { ModalCustom } from "./modal";
import {Closing} from "./Closing";
//Firebase
import RAM from "../../fireBase";
import {addDoc, collection} from "firebase/firestore";

export const   LogIn = () => {
    const [open, setSign] = React.useState(false);
    const handleOpen = () => setSign(true);
    const [message, setMessage] = useState();
    const[Form, SetForm] = useState({
            name : "",
            email : "",
            password : "",
            password2 : "",
            date : "",
            sexo : "",
        })

          
  const addSubmit=(e) => {
    e.preventDefault()
      
    
  
    let sending = {...Form,
      Sesion: Form,} 
   
      
  
      console.log("Orden generada",
        Form
      )
     push(sending) 
    
    }
  const push= async (sending) => {
  if (Form.password === Form.password2){const toFirebase = collection(RAM, 'Registros')
      const to =  await addDoc(toFirebase, sending)
      console.log("Orden generada",
      to
    )
  setMessage(to)
    }else{
        document.getElementById("contraseñas").style.display = "block"
        setTimeout(() => {
        document.getElementById("contraseñas").style.display = "none";}, 3000);
    };}

    const addChange = (e) => {
   
    
        const {value, name} = e.target;
  SetForm({
      ...Form,
    [name] : value,
  
 
     }
      )
  
    }
  



return (
<div>
    
  <button onClick={handleOpen}> Registrarse  </button>  
    <ModalCustom open={open} onClose={addSubmit}>
 
  <h2>Iniciar sesion</h2>
  {message ? (
       <div>
       <div> ¡Has Registrado un perfil!</div>   
   
       <Closing setSign={setSign}/>  
    </div>
     
     ):(
   <div>
   <form onSubmit={addSubmit}>
   <input type="text" name="name" placeholder="Bruce Banner" className="bloquesito" value={Form.name} onChange={addChange} required/> 
    <input type="text" name="email" placeholder="HulkAplasta@ElMejorAvenger.com" className="bloquesito" value={Form.email} onChange={addChange} required/> 
    <input type="date" name="fecha" className="bloquesito" value={Form.date} onChange={addChange} /> 
    <select  name="sexo" className="bloquesito" value={Form.sexo} onChange={addChange} required>
    <option value="Masculino" onChange={addChange}>Masculino</option>
    <option value="Femenino">Femenino</option>
    <option value="Otro">Otro</option> </select>
<input type="text" name="password" placeholder="SoyMasinteligenteQueTonyStark" value={Form.password} onChange={addChange} required />   
<input type="text" name="password2" placeholder="Repetir contraseña" value={Form.password2} onChange={addChange} required />
   <div id="contraseñas"> las contraseñas no coinciden</div>
   <label className="bloquesito">Acepta terminos y condiciones<input type="checkbox" name="Acepta"  className="bloquesito" value={true} onChange={addChange} required/></label>
     
      <button className="bloquesito" >Registrarse </button>
      </form>
     <Closing setSign={setSign}/>  </div> )} 
       </ModalCustom>
    </div>
)



}