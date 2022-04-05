import React from "react"; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



const  CartWidget = (props) => {
   
  
   return (
        <div>
         <ShoppingBagIcon
           fontSize="large" 
          />
            
            <div>{props.carrito}</div> 
        </div>
    )
}

export default CartWidget;
