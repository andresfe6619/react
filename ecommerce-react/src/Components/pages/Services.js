//React
import React from "react";
//Image
import Cat from "../../Styles/img/mewoscles.png"
//Components
import { Link } from "react-router-dom";

export const Services = () => { 
    return (
      <div className="fondoHome">
    
          <h2 className="blancoCentro">
         
 		   ¡Vaya!
 	      </h2> 

    <p className="fondoAmarillo"> 
            <span>   Parece ser que aún seguimos trabjando en esta pagina  , ¡Te avisaremos cuando la pagina este lista!.</span>
            
              </p>

          <div className="imagenHome" > <img src={Cat}  alt=" Logo del sitio"/> </div>

           
  
          <Link to="/"><button  className="Comprar"> Volver al inicio </button></Link>
      
      </div>
    )}
    