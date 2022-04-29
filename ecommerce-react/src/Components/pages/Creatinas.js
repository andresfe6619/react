//React, Hooks, context
import React, {useState, useEffect, useContext} from "react"; 
import CartContext from "../Context/cartContext";
//Components
import {SumarizeRemove} from  "../ListProducts/itemCount";
import {Link} from "react-router-dom";
//Firebase
import { collection, getDocs,  query, where } from "firebase/firestore";
import RAM  from "../../fireBase";
import { useParams } from 'react-router-dom'




export default function  Creatinas  ()  { 
    const { addCartProducts} = useContext(CartContext)
    const [contador, setContador] = useState(0)
  

    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    const [products, setProducts] = useState([])
 
    
    
   const getCreatinas = async () => {
    const collectionRef = query(collection(RAM, 'Productos'), where('category', '==', "creatine"))
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
  
  height="341" alt ={Products.title}> 



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
          

