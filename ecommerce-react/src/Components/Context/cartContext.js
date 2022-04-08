import { createContext, useState } from "react";

const CartContext = createContext();
let miCarrito = [
{id: 
    "1"},
{id: "2"}


]




export function CartProvider  ({children})  {
    const [cartProducts, setCartProducts] = useState([])
const addCartProducts = (product) => {
    setCartProducts(cartProducts=>[...cartProducts, product])}
    
const data = {
        cartProducts,
       addCartProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext