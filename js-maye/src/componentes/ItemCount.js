import React from "react";
import { useState } from "react";

export const ItemCount = () => {
  let [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
    if (counter > 5) {
      setCounter(6);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container my-5">
      <button onClick={restar} className="btn btn-outline-info mb-2">
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={sumar} className="btn btn-outline-info mb-2">
        +
      </button>
      <div>
        <button className="agregar btn btn-outline-info">Agregar</button>
      </div>
    </div>
  );
};

export default ItemCount;
