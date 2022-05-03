// React
import React from "react";
//Components
import CartWidget from "./CartWidget/CartWidgetShopping";
import { Link }  from 'react-router-dom';
import { SignIn } from "../modal/modalSignIn";
import { LogIn } from "../modal/modalLogIn";
//bootsrap
import "bootstrap"

 function Navigate1 () {

return(

<div className="displayFlex">
<h1   className="blancoNegro" id="cabeza"> Meowsculuos shop </h1>

<header >

<nav id="arriba" className="navbar navbar-expand-lg fondoImagen5"  aria-label="Third navbar example">
    <div className="container-fluid">
      < Link to= {"/"}className="navbar-brand" >   Menú principal</Link>
      <button className="navbar-toggler navbar-dark botonBurger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item dropdown">
          <Link to="/Productos"  className="nav-link dropdown-toggle"  id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
            <ul className="dropdown-menu" aria-labelledby="dropdown03">
              <li><Link to="/Proteinas" className="dropdown-item">Proteinas</Link></li>
              <li><Link to="/Creatinas" className="dropdown-item">Creatinas</Link></li>
              <li><Link to="/BCAA" className="dropdown-item">BCAAs</Link></li>
       
             </ul> </li>
          <li className="nav-item">
          <Link to= '/Servicios'className="nav-link active" aria-current="page" >Servicios</Link>
          </li>
          <li className="nav-item">
          <Link to= '/Envios'className="nav-link active" aria-current="page" >Envios</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Marcas asociadas</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown03">
              <li><a className="dropdown-item" href="https://www.newbalance.com.co">New Balance</a></li>
              <li><a className="dropdown-item" href="https://www.newbalance.com.co">Adidas</a></li>
              <li><a className="dropdown-item" href="https://www.powerliftusa.com">Power lift</a></li>
              <li><a className="dropdown-item" href="https://www.nike.com/es/">Nike</a></li>

            </ul>
          </li>
         <CartWidget></CartWidget>
        </ul>
        <form>
         <input type="text" name="Busqueda" placeholder="encuentra productos" className="letraNormal"/>
        
        </form>
      
       
<section className="botonesDerecha">  
<SignIn ></SignIn>

 <LogIn></LogIn>
 </section>         

      </div>
    </div>
  
  </nav>




 

</header>
</div>










)










 }

 export default Navigate1