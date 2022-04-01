import React from "react"; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';




const  CartWidget = () => {
    return (
        <div>
          <ShoppingBagIcon
           fontSize="large" 
          />
            
            <li>0</li>
        </div>
    )
}

export default CartWidget;
