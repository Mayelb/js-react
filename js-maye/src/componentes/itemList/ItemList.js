
import {Item} from "../Item/Item"

export const ItemList = ( {items = []} ) => {
  return (
    <div className="titulo">
      <h2>Productos</h2>
      <div className="prod">
        {items.map((item) => {
          return (
            <Item items={item} key={item.id}/> 
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
