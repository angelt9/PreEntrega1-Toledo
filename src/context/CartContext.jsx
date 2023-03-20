import React from "react";
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CounterContext = createContext(null);

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalPurchase = () => {
    let total = 0;
    cart.forEach((e) => (total += e.quantity * e.price));
    return total;
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Producto eliminado",
      timer: 1000,
    });
  };

  const removeAll = () => {
    setCart([]);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Carrito vaciado",
      timer: 1000,
    });
  };

  const removeForm = () => {
    setCart([]);
  };

  return (
    <CounterContext.Provider
      value={{
        cart,
        setCart,
        removeItem,
        removeAll,
        totalPurchase,
        removeForm,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CartContext;
