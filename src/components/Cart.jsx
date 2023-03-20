import React, {useContext} from "react";
import { CounterContext } from "../context/CartContext.jsx";
import SendOrder from "./SendOrder";
import NoItemsLoad from "./EmptyCart";

const Cart = () => {
  const { cart, removeItem, removeAll, totalPurchase } =
    useContext(CounterContext);

  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return !cart.length ? (
    <NoItemsLoad />
  ) : (
    <>
      <div>
        <button className="btn btn-danger" onClick={removeAll}>
          Limpiar carrito
        </button>
      </div>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <h2>{item.product}</h2>
                  <h5>
                    Precio:
                    <span> ${formatNumber(item.price)}</span>
                  </h5>
                  <p>
                    Cantidad:
                    <span> {item.quantity}</span>
                  </p>
                  <h6>
                    Total parcial:
                    <span> ${formatNumber(item.price * item.quantity)} </span>
                  </h6>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h3>
          Precio total: <span>${formatNumber(totalPurchase())}</span>
        </h3>
      </div>
      {<SendOrder />}
    </>
  );
};

export default Cart;
