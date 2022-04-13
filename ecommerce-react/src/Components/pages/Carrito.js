import React,  {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../Context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';


export const   Carrito = () => {  
  const { cartProducts, removeCartProducts, totalPrice, totalQuantity, setCategory } = useContext(CartContext)
  
  
  
  
  
  if (cartProducts.length === 0) { return (
    <div >
    <div className= "bloquesito">
      <h2 className="blancoNegro  "> ¡Tus compras! </h2>
      <div className="Productos1">
      <div  className="Productos2">
      <h2>¡Vaya! </h2>  
      <h2>Al parecer aun no compras nada y por ende esta seccion está vacía</h2>
      <h2>Te invitamos a presionar el botón que se encuentra debajo</h2>
      
      
      </div>
</div>
<Divider></Divider>
      <div className="Productos4">     
       <Link to = "/Productos" > <button> Ir de compras </button></Link>
      
      
      </div>

</div>




</div>
    )  } 
else {      
  

  return (
      <div >
      <div className= "bloquesito">
        <h2 className="blancoNegro  "> ¡Tus compras! </h2>
        <h2 className="blancoNegro"> {setCategory(cartProducts)} </h2>
        
       </div>
    <div className="Productos1">
      <div  className="Productos2">
      <h2>Producto : </h2>  
      <h2>Titulo   :</h2>  
      <h2>Precio   :</h2>  
      <h2>Cantidad :</h2>  
      
      
      
      
      
      </div>
    {cartProducts.map((cartProduct, i) => {
   
      const { id, title, price, Imagen, quantity, category } = cartProduct
      
    return( <div key={i} className="Productos3"> 
 
          
 <Link to ={ `/category/${id}`} >     <img src={Imagen} height="80"  alt={Imagen}/>  </Link>
           <h2>{title}</h2>
           <h2>{price}</h2>
           <h2>{quantity}</h2>   
          
           <DeleteIcon 
            fontSize="large"
 sx={{ color: grey[500] }} onClick={() => removeCartProducts(cartProduct)}/>

             
             
           </div>
    
     )

    })}</div>
      
      <Divider></Divider>
      <div className="Productos4">
     
      <h5>Total compra  </h5>
      <h5>  Productos : {totalQuantity()} </h5>
      <h5> Precio     : $ {totalPrice(cartProducts)}</h5>
      
       <Link to = "/" > <button className="Comprar" > Terminar compra </button></Link>
       <Link to = "/Productos" > <button> Sigue comprando </button></Link>
      
      </div>
      </div>
 
 
    )}}

