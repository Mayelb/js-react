import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.scss";

export const Item = ({ item }) => {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={item.img} />
          <Card.Title>{item.producto}</Card.Title>
          <Card.Text>{item.precio}</Card.Text>
          {
            item.stock > 0
           ? <Link to={`/producto/${item.id}`} className="btn btn-info my-2">Ver más</Link>
           : <Link to={`/producto/${item.id}`} className="btn btn-dark my-2">Sin stock</Link>
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
