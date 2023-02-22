import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  let [Add, SetAdd] = useState(0);

  const AddProd = () => {
    if (Add < stock) {
      SetAdd(Add + 1);
    }
  };

  const Subtract = () => {
    if (Add > 0) {
      SetAdd(Add - 1);
    }
  };
  return (
    <div>
      <button onClick={Subtract}>-</button>
      <span>{Add} </span>
      <button onClick={AddProd}>+</button>
    </div>
  );
};

export default ItemCount;
