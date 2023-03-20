import React, { useContext, useState } from "react";
import { CounterContext } from "../context/CartContext.jsx";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const SendOrder = () => {
  const { cart, totalPurchase, removeForm } = useContext(CounterContext);
  const [orderID, setOrderID] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    const db = getFirestore();
    e.preventDefault();
    const order = {
      buyer: {
        name: name,
        email: email,
      },
      items: cart.map((products) => ({
        id: products.id,
        name: products.product,
        price: products.price,
        quantity: products.quantity,
      })),
      totalPrice: totalPurchase(),
    };

    const orderCollection = collection(db, "order");
    addDoc(orderCollection, order).then(({ id }) => {
      setOrderID(id);
      Swal.fire(
        "Su compra fué realizada con éxito!",
        "Su ID de compra es: <h3>" + id + "</h3>",
        "success"
      );
      removeForm();
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="asd@gmail.com"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form-label">Nombre y apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Leopoldo Andrés"
              id="exampleInputEmail1"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Comprar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendOrder;
