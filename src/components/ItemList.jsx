import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <Item
              id={prod.id}
              product={prod.product}
              price={prod.price}
              category={prod.category}
            />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemList);
