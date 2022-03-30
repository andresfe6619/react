import React from "react"; 
import SumarizeRemove from "./itemCount";
import {Link} from "react-router-dom";










export default function  ProductsList  (props)  { 
    





        return(
            <div className="Productos" >
                <h2>{props.title}</h2>
             <Link to= "/Detalles/:id ">   <img src = {props.imagen}   width="400"
     height="341">
    


     </img> </Link>
                <p>Precio : $ {props.price}</p>
                <p>Cantidad :  {props.quantity}</p>
                <p>Cada servicio :{props.scoop}</p>
               <p> Stock :  {props.Stock}</p>
                <SumarizeRemove Stock =  {props.Stock} Inicial = {props.initial} />
                
            </div>
        )
    
}

 
