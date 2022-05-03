//React, Hooks, Context
import React from "react";
import { useState, useEffect, useContext } from "react";
import CartContext from "../Context/cartContext";
import { Link, useParams } from "react-router-dom";
//Components
import {SumarizeRemove} from "../ListProducts/itemCount"

//Firebase
import { getDoc, doc } from "firebase/firestore";
import RAM from "../../fireBase";


const Details = () =>{
     const {id} = useParams();
     const [Proteina, setProduct] = useState({});
     const {addCartProducts} = useContext(CartContext)
     const [to, buy ] = useState(true)




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
},[id])
  

   const [contador, setContador] = useState(0)
    const [price, setPrice] = useState(0)
    const Sumarize  = (count) => {
      setContador(Proteina.quantity = count)
        setPrice(Proteina.price = Proteina.price* count)
    buy(false)
     
     addCartProducts(Proteina)

    }   
    return (
   
<div className="fondoNegro gridDetails" >
<a href={Proteina.Imagen}>
<img  src = {Proteina.Imagen}    
     width="500"
     height="500"
     alt={Proteina.Imagen}
     /> </a>
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
 </ol> 
     
     { to ? (           


     <SumarizeRemove  Stock =  {Proteina.Stock} Inicial = {1} action={Sumarize} />
                   
            ):(  
<>
      <Link to="/Productos"  className="bloquesito" ><button>Volver</button></Link>        
      <Link to="/Carrito"   ><button>Finalizar</button></Link>  
</>
          )    }
          
          </section>    

 </div>  )};
   
   
 export default Details;