import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CartContext.jsx";
import Swal from "sweetalert2";

function Item({ id, product, price }) {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  const { setCart } = useContext(CounterContext);
  let [add] = useState(1);

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
      <div key={id}>
        <div>
          <h5>{product}</h5>
          <p>Precio: ${formatNumber(price)}</p>
          <hr />
          <Link to={`/item/${id}`}>
            <button className="btn btn-dark">Detalle</button>
          </Link>
          <button className="btn btn-dark" onClick={() => addCart()}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
}

export default Item;
