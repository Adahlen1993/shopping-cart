import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  let totalCost = 0;
  const handleCheckout = () => {
    dispatch({ type: "CLEAR_CART" });
    // TODO: Clear the cart and navigate to the product page
  };

  
function removeItem(item) {
  dispatch({type: 'REMOVE_FROM_CART', payload: item})
}

  return (
    <div>
      <h2>Checkout</h2>
      {/* TODO: Display items in the cart */}
      <ul>
        {cart.map((item, i) => {
          totalCost += item.price;
          return (
            <li key={i}>
              {item.name} ${item.price}
              <button onClick={removeItem({item})}>Oops Wrong Thing</button>
            </li>
          );
        })}
      </ul>
      <h3>Total:{totalCost}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
