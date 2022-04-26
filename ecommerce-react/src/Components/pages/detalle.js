import React from "react";

import {SumarizeRemove} from "../ListProducts/itemCount"
//import ProductsList from "../ListProducts/Products"
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
//import ListProducts from "../ListProducts/ProductsReady";
import { getDoc, doc } from "firebase/firestore";
import CartContext from "../Context/cartContext";
import RAM from "../../fireBase";


const Details = () =>{
     const {id} = useParams();
     const [Proteina, setProduct] = useState({});
     const {cartProducts, addCartProducts, quantity, individualPrice} = useContext(CartContext)
     const {cantidad, setCantidad}= useState(1)
const getProduct = async () => {

const collectionRef = doc(RAM, 'Productos', id)
const ProductSnapshot = await getDoc(collectionRef);


if (ProductSnapshot.exists()) {
  let Product = ProductSnapshot.data();
  Product.id= ProductSnapshot.id;
  setProduct(Product);
  console.log("Document data:", ProductSnapshot.data());
}else{
  console.log("No such document!");

} 


}






   useEffect (() => {
   getProduct()
 // filterId(wheyProtein, id,)
},[id])
  


     //const filterId= (array, id) =>{
  //return array.map( (product) => {if(product.id === id){return setProduct(product, id)
        
     
               
   // }})}

   const [contador, setContador] = useState(0)
    const [price, setPrice] = useState(0)
    const Sumarize  = (count) => {
      setContador(Proteina.quantity = count)
        setPrice(Proteina.price = Proteina.price* count)
     document.getElementById("enseñar").remove()
     document.getElementById("ocultar").style.display = "block"
     
     addCartProducts(Proteina)

    }   
    return (
   
<div className="fondoNegro gridDetails" >

<img  src = {Proteina.Imagen}    
     width="500"
     height="500"
     alt={Proteina.Imagen}/>    
          <section className=''>
                        
  
      <h2 className="blancoNegro">{Proteina.title}</h2> 
                  <h5>Precio :</h5>
                <h5> $ {Proteina.price}  </h5>
               <h5> peso: </h5>
                
                  
        
                     <h5>   {Proteina.peso}</h5>
                    
                   
                  
         
             
             
                <h5> caracteristicas: </h5>
                 <ul className="listaConPuntos"> 
                     <li>{Proteina.flavor} </li>
                     <li> {Proteina.color} </li>
                   
                   </ul>   
                   
             
               
                 <h5> Contenido: </h5> 
                 <ul className="listaConPuntos"> 
                     
                     <li> {Proteina.calories} </li>
                     <li> {Proteina.carbohydrates} </li>
                     <li> {Proteina.protein} </li>
               
                   </ul>
                   <h5> instrucciones: </h5> 
                 <ul className="listaConPuntos"> 
                     
                     <li> {Proteina.instructions} </li>
                   
               
                   </ul>
 
 
                    
                
             
        
 
           
                <h5> Ventajas: </h5>
                    
                 <ol className="listaConPuntos">
                 <li> {Proteina.advantages}</li>  
 
                 <li> {Proteina.advantages1}</li> 
 
                 <li> {Proteina.advantages2}</li>
 
                 
 
 
     <SumarizeRemove  Stock =  {Proteina.Stock} Inicial = {1} action={Sumarize} />
                 </ol>   
               
          
          </section>    

 </div>  )};
   
   
 export default Details;