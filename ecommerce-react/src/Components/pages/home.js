//React
import React from "react";
//Components
import ItemListHome from "../ListProducts/itemListHome";
//Image
import Cat from "../../Styles/img/mewoscles.png"



export const TinyHome = () => { 
return (
  <div> 
 	   <main className="fondoHome">  
          <h2 className="blancoCentro">
         
 		   ¿¡ Quienes somos!?
 	      </h2> 


          <div className="imagenHome" > <img src={Cat}  alt=" Logo del sitio"/> </div>

               <p className="fondoAmarillo"> 
                 Somos una tienda online hecha por y para el fitness, en la cual ofrecemos diferentes servicios y productos tales como suplementos deportivos, ropa, calzado, recetas,  tambien ofrecemos servicio de entrenamiento, vendemos cursos de deportes en especifico y tambien ofrecemos personal training, en si somos una microempresa relacionada y enfocada a imbuir nuestros
                 clientes en el mundo del fitness, debido a que esto es lo que nos mueve, <span>¡ESTA ES NUESTRA PASIÓN!.</span>
              </p>

   <div className="productos">
             <ItemListHome ></ItemListHome>
   </div>
<h2 > Canales Recomendados</h2> 
   <div className="setentavh"  > <iframe className="iframe "  src="https://www.youtube.com/embed/MY_gyv3ZDLE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >Video de la pagina </iframe> </div>


  






              

              

</main>   
  
  </div>
)}

  



