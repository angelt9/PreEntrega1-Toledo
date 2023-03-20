import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h3>Carrito vacío</h3>
      <h5>Agrega productos antes de comprar</h5>
      <Link to={"../catalogue"}>
        <button className="btn btn-dark">Ir al catálogo </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
