// React
import React from "react";
//Image
import Cat from "../../Styles/img/mewoscles.png"


export const Error = () => { 
    return (
      <div className="fondoHome">
    
          <h2 className="blancoCentro">
         
 		   ¡Error 404 !
 	      </h2> 


          <div className="imagenHome" > <img src={Cat}  alt=" Logo del sitio"/> </div>

               <p className="fondoAmarillo"> 
               Parece ser que nuestra la pagina que buscas no existe o estamos trabajando en ella , <span>¡Volveremos!.</span>
              </p>

  

      
      </div>
    )}
    