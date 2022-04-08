import React, {useContext, useState, useEffect} from "react"; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'
import CartContext from '../../Context/cartContext.js';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
const  CartWidget = () => {
  const { cartProducts, removeCartProducts } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
   






    
  return (
        <div className='cart-button'>
            <ShoppingBagIcon 
                fontSize="large"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <li className="quitarFondo">{cartProducts.length}</li>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (cartProduct, i) => {
                         return(
                        <MenuItem className='item-cart-modal 'id="seVaBorrar" key={i}>
                            <div className='item-cart-modal__img' >
                            <Link to ={ `/category/${cartProduct.id}`} >    <img src={cartProduct.Imagen} width="100" height="100"  alt={cartProduct.Imagen}/>   </Link>
                            </div>
                            <div className='item-cart-modal__info'>
                                <p>{cartProduct.title} <DeleteIcon 
                                fontSize="large"
                                sx={{ color: grey[500] }} onClick={() => removeCartProducts(cartProduct)}/></p>
                                <span className="letraNormal">$ {cartProduct.price} </span>
                                 
                              <p> Productos : {cartProduct.quantity} </p>
                               
                            </div>
                            <div className='item-cart-modal__action'>
                           
                            </div>
                        </MenuItem>
                    )
                })}
                
                <Divider />
                <div className='footer-modal-cart'>
                    <button className="btn-custom"><Link to="/Carrito">Iniciar la compra</Link></button>
                </div>
            </Menu>
        </div>
    )
}


export default CartWidget;
