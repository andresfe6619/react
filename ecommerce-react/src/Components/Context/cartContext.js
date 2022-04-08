import { createContext, useState } from "react";

const CartContext = createContext();



export function CartProvider  ({children})  {
    const [cartProducts, setCartProducts] = useState([])
  const addCartProducts = (product) => {
   let Duplicate = cartProducts.find(cartProduct => cartProduct.id === product.id)
   
    !Duplicate && setCartProducts(cartProducts=>[...cartProducts, product])}
    
    const removeCartProducts = (product) => {
        setCartProducts(cartProducts => cartProducts.filter(cartProduct => cartProduct.id !== product.id))}
    

const data = {
        cartProducts,
       addCartProducts,
       removeCartProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext