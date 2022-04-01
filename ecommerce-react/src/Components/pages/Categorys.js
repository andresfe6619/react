import React from "react";
import { Link } from "react-router-dom";
export default function Categorias() {

    return(
<div className="setentavh">
<h1 className="blancoNegro">Categorias</h1>
<ul className="blancoNegro">
<Link to="/Proteinas" ><li>Proteinas</li> </Link>
 <Link to="/Creatinas"><li>Creatinas</li></Link>

</ul>
</div>



    )
} 
    
