//  React, hooks, context
import React, {useState, useContext}  from "react"
import CartContext from "../Context/cartContext";
//Components
import { Link } from 'react-router-dom'
export  const SumarizeRemove =({Stock, Inicial, id, action}) => {

    const [count, setCount] = useState(Inicial)
    const { setQuantity} = useContext(CartContext) 
    
    
 
 const Remove =() => {
    if (count > 1 )
    setCount(count -1)

} 
 const Sumarize = () => {
     if (count < Stock) {
         setCount(count + 1)
     }
 
    }

    const onAdd1 = () => {action(count)
        
        setQuantity(count)};
      
      

return(
   <div>
    <div id="enseñar">
  <div className="bloquesito" >
 
 

 <button onClick={Remove}>Eliminar</button> 
 <p count={count}>{count}</p>
 <button onClick={Sumarize}>Añadir</button>  
 </div>
 
 <button className="Comprar" onClick={onAdd1}>Comprar  </button>
    </div>
            
    <div id="ocultar">     
   <Link to = "/Carrito"  >  <button>  Finalizar compra</button></Link> 
    </div>     
 
</div>



)


}
