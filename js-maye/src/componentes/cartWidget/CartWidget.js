import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"

 export const CartWidget = () => {

  const {cartQuantity } = useContext(CartContext)
   return (
     <Link to="/cart" className='cartshop'>
        <img src="/assets/img/cart.png" alt="cart"/>
        <span>{cartQuantity(0)}</span>
     </Link>
   )
 }
 
 export default CartWidget;