import React,  {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../Context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';



export const   Carrito = () => {  
  const { cartProducts, removeCartProducts } = useContext(CartContext)
  
  
  
  
  
  
  return (
      <div >
      <div className= "bloquesito">
        <h2 className="blancoNegro  "> Carrito</h2>
       </div>
    <div className="Productos1">
      <div  className="Productos2">
      <h2>Producto : </h2>  
      <h2>Titulo   :</h2>  
      <h2>Precio   :</h2>  
      <h2>Cantidad :</h2>  
      
      
      
      
      
      </div>
    {cartProducts.map((cartProduct, i) => {
  
      const { id, title, price, Imagen, quantity } = cartProduct
      return( <div key={i} className="Productos3"> 
 
          
 <Link to ={ `/category/${id}`} >     <img src={Imagen}width="100" height="100"  alt={Imagen}/>  </Link>
           <h2>{title}</h2>
           <h2>{price}</h2>
           <h2>{quantity}</h2>   
           <DeleteIcon 
            fontSize="large"
 sx={{ color: grey[500] }} onClick={() => removeCartProducts(cartProduct)}/>

              </div>
      )

    })}</div>
      
      
      </div>
 
 
      )}

