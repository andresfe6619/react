import React, {useState}  from "react"

 

const SumarizeRemove = ({Stock, Inicial}) => {
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
    
        alert("agregaste" +"  "+ JSON.stringify(count)+"  "+ "productos")
    }   

return(
    <div >
  <div className="bloquesito">
 
 

 <button onClick={Remove}>Eliminar</button> 
 <p>{count}</p>
 <button onClick={Sumarize}>Añadir</button>  
 </div>
 
 <button className="Comprar" onClick={onAdd1}> Comprar  </button>
    
    
    </div>






)

}


export default SumarizeRemove


