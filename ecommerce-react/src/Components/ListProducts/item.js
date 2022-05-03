//React, hooks
 import React  from "react";

//Components
import {Link} from "react-router-dom";






 export default function Items({datas}) {

    const {title, price, Imagen, id, quantity, protein, Stock} = datas;




    return (

        <div className="productos" >
         
        <h2>{title}      </h2>
       
      <a href={Imagen} > 
      <img src = {Imagen}   width="400"

height="341" alt={title}> 



</img> </a>
        <p>Precio : $ {price}</p>
        <p>Cantidad :  {quantity}</p>
        <p>Cada servicio :{protein}</p>
       <p> Stock :  {Stock}</p>
      
 <Link to={ `/category/${id}`}>   <button className="Comprar"  >Comprar</button></Link>  
   
    </div>  


             )}