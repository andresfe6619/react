import React, {useState}  from "react"
import { Link, useNavigate } from 'react-router-dom'
 

const SumarizeRemove = ({Stock, Inicial}) => {
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
        //navigate`/Detalle/${id}`
       
    }   

return(
    <div >
  <div className="bloquesito">
 
 

 <button onClick={Remove}>Eliminar</button> 
 <p>{count}</p>
 <button onClick={Sumarize}>Añadir</button>  
 </div>
 
 <button className="Comprar" onClick={onAdd1}><Link to ={`/category/${id}`}>  Comprar </Link> </button>
    
    
    </div>






)

}


export default SumarizeRemove


