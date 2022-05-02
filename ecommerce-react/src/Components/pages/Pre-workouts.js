//React, Hooks, context
import React, {useState, useEffect} from "react"; 

//Components
import Items  from "../ListProducts/item";
//Firebase
import { collection, getDocs,  query, where } from "firebase/firestore";
import RAM  from "../../fireBase";
import { useParams } from 'react-router-dom'




export default function  PreWorkouts  ()  { 

  

    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    const [products, setProducts] = useState([])
 
    
    
   const getCreatinas = async () => {
    const collectionRef = query(collection(RAM, 'Productos'), where('category', '==', "Pre"))
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
                       
                       <div key={i} className="Productos">
                        <Items datas={Products} />
                      
    
      
  

                    </div>
                   );
                 })
                }
             </>
            ) : (
               <p> BCAA en camino</p>
           )
           
          }
        </div>  );
     };
          