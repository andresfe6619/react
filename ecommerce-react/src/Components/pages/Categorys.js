// React 
import React from "react";
//Components
import { Link} from "react-router-dom";
//Image
import  Proteinas  from "../../Styles/img/alimentos.jpg";


export default function Categorias() {

    return(
<div className="setentavh ">
<h1 className="blancoNegro">Categorias</h1>
<ul className="blancoNegro bloquesito">
<Link  to ="/Proteinas" >  <li >Proteinas
 <div><img src={Proteinas} alt="proteinas" width="250" height="250" /></div></li> </Link>
 
<Link to="/Creatinas"><li>Creatinas
 <div><img src="https://selectos.eu/wp-content/uploads/2020/12/Creatine_carousel_ensemble.jpg"  alt="creatinas"  width="250" height="250" /></div></li></Link>
 <Link to="/BCAA"><li> Pre-Workouts
 <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjvuAVGa_6aeZHZb1k6-OLim1h9svDKeIeb_aqn8XhnfkRKI3a1rG1NntgsUY2gah6ec&usqp=CAU"  alt="Pre-workouts"  width="250" height="250" /></div></li></Link>



</ul>
</div>



    )
} 
    
