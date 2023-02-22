import React from "react";
import ItemList from "../components/ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryid } = useParams();
  const itemFilter = Data.filter((product) => product.category === categoryid);
  return (
    <>
      <h1>{greeting}</h1>
      {categoryid ? (
        <ItemList product={itemFilter} />
      ) : (
        <ItemList product={Data} />
      )}
    </>
  );
};

export default ItemListContainer;
