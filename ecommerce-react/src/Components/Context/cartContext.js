import { createContext, useState } from "react";

const CartContext = createContext();



export function CartProvider  ({children})  {
    const [cartProducts, setCartProducts] = useState([])
     
    const addCartProducts = (product) => {
   
    let Duplicate = cartProducts.find(cartProduct => cartProduct.id === product.id)
   
    !Duplicate && setCartProducts(cartProducts=>[...cartProducts, product])}
    
    const removeCartProducts = (product) => {
        setCartProducts(cartProducts => cartProducts.filter(cartProduct => cartProduct.id !== product.id))}
    
const  totalPrice = () => {
    let total = 0

    cartProducts.forEach( (cartProduct) => {
       total = cartProduct.price *cartProduct.quantity + total 
    })

    return total
  }
const  removeAll = () => {
    let products = []
    setCartProducts(products)
 return products

}
  
  
  const totalQuantity = () => {
let total = cartProducts.length
  
    return total
  }

const data = {
        cartProducts,
       addCartProducts,
       removeCartProducts,
       totalPrice,
       totalQuantity,
       removeAll
 }


  
   
 

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext