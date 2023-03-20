import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./context/CartContext";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/catalogue"
              element={<ItemListContainer greeting="Bienvenido" />}
            />
            <Route
              exact
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  );
};

export default App;
