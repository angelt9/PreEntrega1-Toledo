import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detailProd }) => {
  const { product, description, price, quantity, id } = detailProd;

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div>
      <div key={id}>
        <div>
          <h5>{product}</h5>
          <p>Precio: ${formatNumber(price)}</p>
          <p>Descripcion: {description}</p>
          <p>Stock: {quantity}</p>
          <ItemCount stock={quantity} id={id} price={price} product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
