import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CartContext.jsx";

const CardWidget = () => {
  const { cart } = useContext(CounterContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div>
      <Link to={"/cart"}>
        <button className="btn btn-dark" type="button">🛒{quantity}</button>
      </Link>
    </div>
  );
};

export default CardWidget;
