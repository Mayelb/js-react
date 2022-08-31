import React from "react";
import { useState } from "react";
 

export const ItemCount = () => {
  let [counter, setCounter] = useState(0);

  const handlesumar = ({stock}) => {
    setCounter(counter + 1);
    if (counter > stock) {
      setCounter(stock);
    }
  };

  const handlerestar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={handlerestar} className="btn btn-outline-info mb-2">
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={handlesumar} className="btn btn-outline-info mb-2">
        +
      </button>
      <div>
        <button className="agregar btn btn-outline-info">Agregar</button>
      </div>
    </div>
  );
};

export default ItemCount;
