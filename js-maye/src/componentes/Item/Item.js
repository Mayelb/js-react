import Card from "react-bootstrap/Card";
import { ItemCount } from "../ItemListContainer/ItemCount";

export const Item = ({item}) =>{
    return (
        <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={item.img}/>
            <Card.Title>{item.producto}</Card.Title>
            <Card.Text>{item.precio}</Card.Text>
            <ItemCount />
          </Card.Body>
        </Card>
      </div> 
    )
}

export default Item