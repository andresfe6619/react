import CartWidget from "./CartWidget/CartWidgetShopping";
import { Link }  from 'react-router-dom';
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
          <li className="nav-item">
            <Link to= '/Productos'className="nav-link active" aria-current="page" href="productos.html">Productos</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="servicios.html">servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="envios.html">Envios</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Marcas asociadas</a>
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
<button><a href="iniciar+sesion-.html"> Iniciar sesion </a>  </button> 
<button><a href="registro.html">  registrarse  </a> </button>
 </section>         

      </div>
    </div>
  
  </nav>




 

</header>
</div>










)










 }

 export default Navigate1