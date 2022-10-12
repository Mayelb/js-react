import { createContext,useEffect,useState } from "react";
import Swal from 'sweetalert2';
 
 
export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart]= useState([])


    const addToCart = (producto)  => {
      Swal.fire({
        title: `¡Se agregó ${producto.cantidad} ${producto.producto}  a tu carrito!`,
        imageUrl: '/assets/img/saludo.jpg',
        confirmButtonColor: '#39d4ec',
        confirmButtonText: 'Aceptar'
      })
      setCart([...cart, producto])
    }

    const removeItem = (id) => {
        setCart( cart.filter((producto) => producto.id !== id))
    }
  
    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, producto)=> acc + producto.cantidad, 0)
    }

    const cartTotal = ()  => {
        return cart.reduce ((acc, producto)=> acc + producto.cantidad * producto.precio, 0)
    }

    const emptyCart = () =>{
      Swal.fire({
        title: 'Estás seguro?',
        imageUrl: '/assets/img/emojiTriste.jpg',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })  
    }

    const terminarCompra = (id) => {
      Swal.fire({
        title: '¡Compra exitosa!',
        text: `Tú número de orden es: ${id}`,
        imageUrl: '/assets/img/tenor.gif',
        confirmButtonColor: '#39d4ec',
        confirmButtonText: 'Aceptar'
      })
      setCart([])
    }
  
     return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            terminarCompra
          }}>
            {children}
         </CartContext.Provider>     
     )
   }
   
   export default CartContext;