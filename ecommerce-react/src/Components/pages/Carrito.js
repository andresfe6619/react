// React, Hooks, context
import React,  {useContext, useState} from "react";
import CartContext from "../Context/cartContext";
// Components
import {Link} from "react-router-dom";
import { ModalCustom } from "../modal/modal";
//Firebase
import RAM from "../../fireBase";
import {addDoc, collection} from "firebase/firestore";
//MUI
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';


export const   Carrito = () => {  
  const { cartProducts, removeCartProducts, totalPrice, totalQuantity, removeAll} = useContext(CartContext)
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState();
  const[Form, SetForm] = useState({
          name : "",
          lastName : "",
          Email : "",
          phone : "",
          address:"",
  })
  const [order, setOrder] = useState(
  {
      buyer : Form,
      items: cartProducts.map((cartProduct) => {
return{ 
      id: cartProduct.id,
       title: cartProduct.title,
        price: cartProduct.price,
         quantity: cartProduct.quantity,
    }
      
      }),
      total: totalPrice(),




  }
  );
  console.log(
    order
  )
  
  const handleOpen = () => setOpen(true);
  
const addSubmit=(e) => {
  e.preventDefault()
  
  let sending = {...order,
    buyer: Form,}
  setOrder({...order,
    buyer: Form,
  } 
    )

   
    
   push(sending) 
  
  }
const push= async (sending) => {
const toFirebase = collection(RAM, 'Peticiones')
    const to =  await addDoc(toFirebase, sending)
 
setMessage(to)
  }
  const addChange = (e) => {
  const {value, name} = e.target;
SetForm({
    ...Form,
  [name] : value,


   }
    )

  }

 const remove = () => {
   removeAll(cartProducts)
  
   setOpen(false)

 }
 
  
  
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
      <div>
      <div className= "bloquesito">
        <h2 className="blancoNegro  "> ¡Tus compras! </h2>
      
        
       </div>
    <div className="Productos1">
      <div  className="Productos2">
      <h2>Producto : </h2>  
      <h2>Titulo   :</h2>  
      <h2>Precio   :</h2>  
      <h2>Cantidad :</h2>  
      
      
      
      
      
      </div>

    {cartProducts.map((cartProduct, i) => {
  
      const { id, title, price, Imagen, quantity} = cartProduct
      
    return( <div key={i} className="Productos3"> 
 
          
 <Link to ={ `/category/${id}`} >     <img src={Imagen} height="80"  alt={Imagen}/>  </Link>
           <h2>{title}</h2>
           <h2> $ {price}</h2>
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
       <Link to = "/Productos" > <button> Sigue comprando </button></Link>
       <div>
      <button onClick={handleOpen} className="Comprar">Terminar mi compra </button>
<ModalCustom open={open} onClose={addSubmit}>
  <h2> Registro de la compra </h2>
  {message ? (
       <div>
       <div> Orden enviada</div>   
     <div> Numero de su orden : </div>
    <div> {message.id}</div>
    <Link to="/"><button onClick={remove} className="Comprar"> Cerrar </button></Link>
    </div>
     
     ):(
     <form onSubmit={addSubmit}>
       
        
<input type="text" name="name" placeholder="Bruce" className="bloquesito" value={Form.name} onChange={addChange} required/> 
<input type="text" name="lastName" placeholder="Wayne"className="bloquesito" value={Form.lastName} onChange={addChange} required/>
<input type="number" name="phone" placeholder="xxx-xxx-xx-xx" className="bloquesito" value={Form.phone} onChange={addChange} required/>
<input type="text" name="Email" placeholder="Batman@gmail.bat" className="bloquesito" value={Form.Email} onChange={addChange} required/>
<input type="text" name="address" placeholder="Callejó del crimen" className="bloquesito" value={Form.address} onChange={addChange} required/>
<label >Aceptar terminos y condiciones <input type="Checkbox"  required /></label>

         
         <button  className="bloquesito Comprar" >Enviar datos</button> 
      </form>  )} 
</ModalCustom>
      


    </div>
  

      
      
      </div> 
      
 </div>
 
    )}} 

