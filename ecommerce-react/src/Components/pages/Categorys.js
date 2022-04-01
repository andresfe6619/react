import React from "react";
import { Link } from "react-router-dom";
import  Proteinas  from "../../Styles/img/alimentos.jpg";


export default function Categorias() {

    return(
<div className="setentavh ">
<h1 className="blancoNegro">Categorias</h1>
<ul className="blancoNegro bloquesito">
<Link to="/Proteinas" ><li >Proteinas
 <div><img src={Proteinas} alt="proteinas" width="250" height="250" /></div></li> </Link>
 
<Link to="/Creatinas"><li>Creatinas
 <div><img src="https://selectos.eu/wp-content/uploads/2020/12/Creatine_carousel_ensemble.jpg"  alt="creatinas"  width="250" height="250" /></div></li></Link>
</ul>
</div>



    )
} 
    
