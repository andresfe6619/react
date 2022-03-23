
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
      const Aminoacidos = await getCreatinas;
      setCreatinas(Aminoacidos);
    } catch (Error) {
      console.log(Error);
    
    }

} ;


useEffect( () => {
    getCreatinasAsync().then( (Creatines) => {
        setCreatinas(Creatines)
    }).finally( () => {
        console.log("Ya organizamos las creatinas :)")
    })
}, []);


// return(
//     <div>
//         {CreatineList.map( ( Creatina ) => {
//             const {id} = Creatina

//             return(
//                 <ProductsList  props={Creatina} key={id}/>
//             )
//         })}
//     </div>
// ) 


 return (
     <div >
       { 
      
         CreatineList.length ? ( 
           <>
             {
             
               CreatineList.map((Creatina) => {
               
                return (
                   
                   <div key={Creatina.id}>
                   
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
           <p></p>
       )
       
      }
    </div>  );
 };
        export default Creatins1