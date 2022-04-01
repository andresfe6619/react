import React, {useState}  from "react"
import { Link, useNavigate } from 'react-router-dom'
 

export  const SumarizeRemove =({Stock, Inicial,id}) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(Inicial)
 

 const Remove =() => {
    if (count > 1 )
    setCount(count -1)

} 
 const Sumarize = () => {
     if (count < Stock) {
         setCount(count + 1)
     }
 
    }

    const onAdd1 = () =>{ 
       
       console.log(id)
    }   

return(
    <div >
  <div className="bloquesito">
 
 

 <button onClick={Remove}>Eliminar</button> 
 <p>{count}</p>
 <button onClick={Sumarize}>Añadir</button>  
 </div>
 
 <button className="Comprar" onClick={onAdd1}>Comprar  </button>
    
    
    </div>






)

}

