import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to={"/cart"}>
        <button type="button">
          🛒<span>3</span>
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
