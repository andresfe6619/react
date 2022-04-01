import React from "react";
import {wheyProtein} from "../ListProducts/itemDetail"
import {SumarizeRemove} from "../ListProducts/itemCount"
//import ProductsList from "../ListProducts/Products"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import ListProducts from "../ListProducts/ProductsReady";

const Details = ()=>{
     const {id,  category} = useParams();
     const [Proteina, setProduct] = useState({});

console.log (Proteina)

   useEffect (() => {

  filterId(wheyProtein, id)
},[id])
  

     const filterId= (array, id) =>{
  return array.map( (product) => {if(product.id === id){return setProduct(product, id)
        
     
               
    }})}


    return (
   
<div className="fondoNegro gridDetails" >

<img  src = {Proteina.Imagen}    
     width="500"
     height="500"
     alt={Proteina.Imagen}/>    
          <section className=''>
                          
  
      <h2 className="blancoNegro">{Proteina.title}</h2> 
                  <h5>Precio :</h5>
                <h5> {Proteina.price}  </h5>
               <h5> {Proteina.title2} </h5>
                
                  <ul className="listaConPuntos"> 
                     
 
 
                     <li>  {Proteina.Data1}</li>
                     <li>  {Proteina.Data2}</li>
                     <li>  {Proteina.Data3}</li>
                     <li>  {Proteina.Data4}</li>
                     <li>  {Proteina.Data5}</li>
                     <li> {Proteina.Data6}</li>
                   </ul>
                  
         
             
             
                <h5> {Proteina.title3} </h5>
                 <ul className="listaConPuntos"> 
                     <li>{Proteina.Data7} </li>
                     <li>{Proteina.Data8} </li>
                   
                   </ul>   
                   
             
               
                 <h5>{Proteina.title4} </h5> 
                 <ul className="listaConPuntos"> 
                     
                     <li> {Proteina.Data9} </li>
                     <li> {Proteina.Data10} </li>
                     <li> {Proteina.Data11} </li>
                     <li> {Proteina.Data12} </li>
                   </ul>
                     
 
 
                    
                
             
        
 
           
                <h5> {Proteina.title5 }</h5>
                    
                 <ol className="listaConPuntos">
                 <li> {Proteina.Data13}</li>  
 
                 <li> {Proteina.Data14}</li> 
 
                 <li> {Proteina.Data15}</li>
 
                 <li> {Proteina.Data16}</li> 
 
                 
 
 
     <SumarizeRemove  Stock =  {10} Inicial = {1} />
                 </ol>   
               
          
          </section>    

 </div>  )};
   
   
 export default Details;