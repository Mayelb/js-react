import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../componentes/context/CartContext';
import Card from "react-bootstrap/Card";
import { BsTrash } from "react-icons/bs";
 

    export const Cart = () => {
    const { cart, cartTotal, removeItem, emptyCart } = useContext(CartContext)
  
    return (
     <div>
       <h2>Carrito</h2>

       { cart.map((producto)=>(
        <div key={producto.id} className="container">
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{producto.producto}</Card.Title>
            <Card.Text>{producto.precio}</Card.Text>
            <Card.Text>{producto.cantidad}</Card.Text>
            <button onClick={removeItem(producto.id)} className="btn btn-info my-2"><BsTrash/></button>
          </Card.Body>
        </Card>
      </div> 

       ))}

    <h4> Total:${cartTotal} </h4>
    <button onClick={emptyCart} className="btn btn-info my-2">Vaciar Carrito</button>

     </div>
   )
 }
 
 export default Cart;