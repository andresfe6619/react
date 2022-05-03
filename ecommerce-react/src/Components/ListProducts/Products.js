//React, hooks, context
import React, {useState, useEffect, useContext} from "react"; 
import { useParams } from 'react-router-dom'

//Components

import {Link} from "react-router-dom";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import RAM  from "../../fireBase";





export default function  ProductsList  ()  { 


    const [loading , setLoading] = useState(true)

    const {  category } = useParams()

    const [products, setProducts] = useState([])
 
    
    
   const getCreatinas = async () => {
    const collectionRef = collection(RAM, 'Productos')
    const ProducSnapshot = await getDocs(collectionRef);
       const ProducData = ProducSnapshot.docs.map((doc) => {
       let Product = doc.data();
       Product.id= doc.id;
       return Product; 
       
       
       
       })

       return ProducData;
};
    
    
useEffect( () => {
    setProducts([])
    setLoading(true)
    getCreatinas().then( (productos) => {
        setLoading(false)
        category ? filterProductByCategory(productos, category) : setProducts(productos)
  console.log (category)  })
}, [category])


const filterProductByCategory = (array , category) => {
    return array.map( (product, i) => {
        if(product.category === category) {
           return setProducts(products => [...products, product]);
        }
    })
}
 
    
    
    
     return (
         <div >
           { 
          
             products.length ? ( 
               <>
                 {
                 
                   products.map((Products,  i) => {
                   
                    return (
                       
                       <div key={i}>
                        <div className="Productos" >
              
              <h2>{Products.title}      </h2>
             
            
            <img src = {Products.Imagen}   width="400"
  
  height="341"> 



   </img> 
              <p>Precio : $ {Products.price}</p>
              <p>Cantidad :  {Products.quantity}</p>
              <p>Cada servicio :{Products.protein}</p>
             <p> Stock :  {Products.Stock}</p>
             <Link to ={ `/category/${Products.id}`} >  <button>Ver Producto</button> </Link>
            
          </div>  
      )
  

                    </div>
                   );
                 })
                }
             </>
            ) : (
               <p> nuestra mascota no quiere soltar las Proteinas, ¡un momento por favor!</p>
           )
           
          }
        </div>  );
     };
          


    
     
        
        
            
           
        
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
     
    
