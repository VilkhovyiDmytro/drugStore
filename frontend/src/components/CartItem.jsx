import { useState } from "react";

/* eslint-disable react/prop-types */
function CartItem({ medecine, onChangeQuantity }) {
  const [quantity, setQuantity] = useState(medecine.quantity);

  return (
    <div className="flex flex-col items-center justify-around border gap-4 rounded-xl w-full py-4">
      <p>{medecine.name}</p>
      <p>Price for one: {medecine.name}</p>
      <p>Total price: {medecine.name}</p>
      <input
        type="number"
        min={1}
        className="inp"
        value={quantity}
        onChange={(e) => {
          onChangeQuantity(medecine.name, medecine.shopId, +e.target.value);
          setQuantity(e.target.value);
        }}
      />
      <button className="btn">Delete</button>
    </div>
  );
}

export default CartItem;
