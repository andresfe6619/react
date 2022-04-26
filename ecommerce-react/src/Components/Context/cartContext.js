import { createContext, useState } from "react";

const CartContext = createContext();



export function CartProvider  ({children})  {
    const [cartProducts, setCartProducts] = useState([])
    const [quantity, setQuantity] = useState(0)
    
    
    const addCartProducts = (product) => {
   
    let Duplicate = cartProducts.find(cartProduct => cartProduct.id === product.id)
   
    !Duplicate && setCartProducts(cartProducts=>[...cartProducts, product])}
    
    const removeCartProducts = (product) => {
        setCartProducts(cartProducts => cartProducts.filter(cartProduct => cartProduct.id !== product.id))}
    
const  totalPrice = () => {
    let total = 0

    cartProducts.forEach( (cartProduct) => {
       total = cartProduct.price  + total 
    })

    return total
  }


const  individualPrice = () => {
let total = 0

cartProducts.map( (cartProduct) => {
   total = cartProduct.price * cartProduct.quantity + total 


  } )
  return total
}
const  removeAll = () => {
  
    setCartProducts([])
 

}
  
  
  const totalQuantity = () => {
    let total = 0

    cartProducts.forEach( (cartProduct) => {
       total = cartProduct.quantity  + total 
    })

    return total
  }
const data = {
        cartProducts,
       addCartProducts,
       removeCartProducts,
       totalPrice,
       totalQuantity,
       removeAll,
       setQuantity,
       individualPrice
      }


  
   
 

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext