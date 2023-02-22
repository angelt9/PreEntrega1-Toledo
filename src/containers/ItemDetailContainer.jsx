import React from "react";
import ItemDetail from "../components/ItemDetail";
import Data from "../data.json";

const ItemDetailContainer = () => {
  return (
    <div>
      <ItemDetail prods={Data} />
    </div>
  );
};

export default ItemDetailContainer;
