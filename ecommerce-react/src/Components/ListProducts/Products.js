import React, {useState, useEffect, useContext} from "react"; 
import {SumarizeRemove} from "./itemCount";
import {Link} from "react-router-dom";
import { collection, getDocs, doc } from "firebase/firestore";
import RAM  from "../../fireBase";
import { useParams } from 'react-router-dom'
import CartContext from "../Context/cartContext";



export default function  ProductsList  (props)  { 
    const {cartProducts, addCartProducts, setCategory} = useContext(CartContext)
    const [contador, setContador] = useState(0)
  

    const [loading , setLoading] = useState(true)

    const { id, category } = useParams()

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
 const Sumarize  = (e) => {
       e.stopPropagation()
        setContador(contador +1) 
 
    document.getElementById("enseñar").remove()
    document.getElementById("ocultar").style.display = "block"
    addCartProducts(products)
    console.log(addCartProducts)

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
             
            <Link to ={ `/category/${Products.id}`} > 
            <img src = {Products.Imagen}   width="400"
  
  height="341"> 



   </img> </Link>
              <p>Precio : $ {Products.price}</p>
              <p>Cantidad :  {Products.quantity}</p>
              <p>Cada servicio :{Products.protein}</p>
             <p> Stock :  {Products.Stock}</p>
              <SumarizeRemove  Stock =  {Products.Stock} Inicial = {Products.initial} id={Products.id} action={Sumarize}  />
            
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
          


    
     
        
        
            
           
        
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
     
    
