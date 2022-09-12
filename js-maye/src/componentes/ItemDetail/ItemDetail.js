import { ItemCount } from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export const ItemDetail = ({producto})=> {

  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = ( ) => {
    const itemToCart = {
      id: producto.id,
      Precio: producto.precio,
      Producto: producto.producto,
       
    }

    console.log (itemToCart)

  }

    return(
        <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={producto.img}/>
            <Card.Title>{producto.producto}</Card.Title>
            <Card.Text>{producto.precio}</Card.Text>
            <Card.Text>{producto.descripcion}</Card.Text>
            <ItemCount max={producto.stock} 
                       counter={cantidad}
                       setCounter={setCantidad}
                       handleAgregar={handleAgregar}
            />
          </Card.Body>
        </Card>  
      </div>  
    )

}

export default ItemDetail 