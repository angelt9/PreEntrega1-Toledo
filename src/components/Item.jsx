import React from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";

function Item({ id, product, price, category, quantity }) {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }
  return (
    <>
      <div key={id}>
        <div>
          <h5>{product}</h5>
          <h6>{category}</h6>
          <p>
            Precio ARS: ${formatNumber(price)}
          </p>
          <p>Stock: {quantity}</p>
          <ItemCount stock={quantity} />
          <Link to={`/item/${id}`}>
            <p>Detalles</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
