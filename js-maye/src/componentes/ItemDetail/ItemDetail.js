import { ItemCount } from "../ItemListContainer/ItemCount";
import Card from "react-bootstrap/Card";

export const ItemDetail = ({producto})=> {

    return(
        <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={producto.img}/>
            <Card.Title>{producto.producto}</Card.Title>
            <Card.Text>{producto.precio}</Card.Text>
            <Card.Text>{producto.descripcion}</Card.Text>
            <ItemCount/>
          </Card.Body>
        </Card>  
      </div>  
    )

}

export default ItemDetail 