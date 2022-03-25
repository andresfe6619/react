import React, {useState, useEffect} from 'react'
 import {wheyProtein} from "./itemDetail"

 export const ProteinDetails = () => { 
        const [Proteinas, setProteinas] = useState ([]);

        const getWhey = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(wheyProtein);
            }, 3000);
          });
          const getWheyAsync = async () => {
            try {
              const Proteina = await getWhey;
              setProteinas(Proteina);
            } catch (Error) {
              console.log(Error);
            
            }
        
        } ;

        useEffect( () => {
            getWheyAsync().then( () => {
                
            }).finally( () => {
                console.log("Ya organizamos las proteinas :)")
            })
        }, []);
        
        return (
            <div >
              { 
             
                Proteinas.length ? ( 
                  <>
                    {
                    
                      Proteinas.map((Proteina, i ) => {
                      
                       return (
                          
                          < div key={i} className="fondoNegro"> 
                          <section>
  
  <img src = {Proteina.Imagen}    
     width="400"
     height="341"></img>
         
               <h6> {Proteina.title2} </h6>
                 <h6> {Proteina.price}  </h6> 
                  <ul className="listaConPuntos"> 
                     
 
 
                     <li>  {Proteina.Data1}</li>
                     <li>  {Proteina.Data2}</li>
                     <li>  {Proteina.Data3}</li>
                     <li>  {Proteina.Data4}</li>
                     <li>  {Proteina.Data5}</li>
                     <li> {Proteina.Data6}</li>
                   </ul>
                  
         
             
             
                <h6> {Proteina.title3} </h6>
                 <ul className="listaConPuntos"> 
                     <li>{Proteina.Data7} </li>
                     <li>{Proteina.Data8} </li>
                   
                   </ul>   
                   
             
               
                 <h6>{Proteina.title4} </h6> 
                 <ul className="listaConPuntos"> 
                     
                     <li> {Proteina.Data9} </li>
                     <li> {Proteina.Data10} </li>
                     <li> {Proteina.Data11} </li>
                     <li> {Proteina.Data12} </li>
                   </ul>
                     
 
 
                    
                
             
        
 
           
                <h6> {Proteina.title5 }</h6>
                    
                 <ol className="listaConPuntos">
                 <li> {Proteina.Data13}</li>  
 
                 <li> {Proteina.Data14}</li> 
 
                 <li> {Proteina.Data15}</li>
 
                 <li> {Proteina.Data16}</li> 
 
 
 
 
 
                 </ol>   
                
            
          </section>    
                     
                           
                       </div>
                      );
                    })
                   }
                </>
               ) : (
                  <p> Proteinas en camino :) </p>
              )
              
             }
           </div>  );
        };
  
  
  

  