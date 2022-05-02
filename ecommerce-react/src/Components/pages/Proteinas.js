//React, Hooks, context
import React, {useState, useEffect, useContext} from "react"; 
import CartContext from "../Context/cartContext";
import { useParams } from 'react-router-dom'
//Components

import Items  from "../ListProducts/item";
//Firebase
import { collection, getDocs,  query, where } from "firebase/firestore";
import RAM  from "../../fireBase";





export default function  Proteinas  (props)  { 

  

    const [loading , setLoading] = useState(true)

    const { id  } = useParams()

    const [products, setProducts] = useState([])
 
    
    
   const getCreatinas = async () => {
    const collectionRef = query(collection(RAM, 'Productos'), where('category', '==', "protein"))
    const ProducSnapshot = await getDocs(collectionRef);
       const ProducData = ProducSnapshot.docs.map((doc) => {
       let Product = doc.data();
       Product.id= doc.id;
       return Product; 
       
       
       
       })

       return ProducData;
      }

    
    
useEffect( () => {
    setProducts([])
    setLoading(true)
    getCreatinas().then( (products) => {
        setLoading(false)
        id ? filterProductByCategory(products, id) : setProducts(products)
 })


}, [id])


const filterProductByCategory = ( array, id) => {
    return products.map( (product, i) => {
        if(product.id === id) {
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
                       
                       <div key={i} className="Productos">
                        < Items datas={Products}  key={Products.id}/>
                      
      
  

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
          

