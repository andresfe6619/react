
import React, {useState, useEffect} from 'react'

import {CreatineList} from "./items"


import ProductsList from "./Products"
 
const Creatins1 = () => {
const [Creatinas, setCreatinas] = useState ([]);


const getCreatinas = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CreatineList);
    }, 2000);
  });



const getCreatinasAsync = async () => {
    try {
      const aminoacidos = await getCreatinas;
      setCreatinas(aminoacidos);
    } catch (Error) {
      console.log(Error);
    
    }

} ;


useEffect( () => {
    getCreatinasAsync().then( () => {
        
    }).finally( () => {
        console.log("Ya organizamos las creatinas :)")
    })
}, []);





 return (
     <div >
       { 
      
         Creatinas.length ? ( 
           <>
             {
             
               Creatinas.map((Creatina, i) => {
               
                return (
                   
                   <div key={i}>
                   
                     <ProductsList  imagen = {Creatina.imagen}  alt={Creatina.imagen} width="400"
                    height="341"
                     title={Creatina.title}      
                    price= {Creatina.price}
                                 quantity =  {Creatina.quantity}
                                scoop ={Creatina.scoop}
                                Stock  =  {Creatina. Stock} 
                                initial =  {1}
                                />
                    
                </div>
               );
             })
            }
         </>
        ) : (
           <p> nuestra mascota no quiere soltar las creatinas, ¡un momento por favor!</p>
       )
       
      }
    </div>  );
 };
        export default Creatins1