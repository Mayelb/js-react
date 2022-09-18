import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../componentes/context/CartContext';
import Card from "react-bootstrap/Card";
import { BsTrash } from "react-icons/bs";
 

    export const Cart = () => {
    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)
    
 
    return (
     <div>
       <h2>Carrito</h2>

       { cart.map((producto)=>(
        <div key={producto.id} className="container">
        <Card style={{ width: "20rem"}}>
          <Card.Body>
            <Card.Title> Producto: {producto.producto}</Card.Title>
            <Card.Text>Precio: {producto.precio}</Card.Text>
            <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
            <button onClick={() =>removeItem(producto.id)} className="btn btn-info my-2"><BsTrash/></button>
          </Card.Body>
        </Card>
      </div> 

       ))}
       <div className='total'>
         <h4> Total:${cartTotal()}</h4>
         <button onClick={emptyCart} className="btn btn-info my-2">Vaciar Carrito</button>
       </div>
     </div>
   )
 }
 
 export default Cart;