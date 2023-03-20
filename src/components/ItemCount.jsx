import React, { useState, useContext } from "react";
import { CounterContext } from "../context/CartContext.jsx";
import Swal from "sweetalert2";

const ItemCount = ({ stock, id, price, product }) => {
  const { setCart } = useContext(CounterContext);
  let [add, setAdd] = useState(1);

  const addProd = () => {
    if (add < stock) {
      setAdd(add + 1);
    }
  };

  const subtract = () => {
    if (add > 1) {
      setAdd(add - 1);
    }
  };

  const addCart = () => {
    setCart((addItems) => {
      const addedItem = addItems.find((items) => items.id === id);
      Swal.fire({
        position: "center",
        title: "Agregado al carrito",
        timer: 1000,
      });

      if (addedItem) {
        return addItems.map((items) => {
          if (items.id === id) {
            return { ...items, quantity: items.quantity + add };
          } else {
            return items;
          }
        });
      } else {
        return [...addItems, { id, quantity: add, price, product }];
      }
    });
  };

  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={subtract}>-</button>
        <span>{add} </span>
        <button className="btn btn-dark" onClick={addProd}>+</button>
      </div>
      <div>
        <button className="btn btn-dark" onClick={() => addCart()}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
