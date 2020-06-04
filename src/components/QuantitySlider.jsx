import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Icon } from "semantic-ui-react";

const QuantitySlider = ({ cartItem }) => {
  const cart = useContext(CartContext);
  return (
    <>
      <Icon name="angle left" onClick={() => cart.removeItem(cartItem)} />
      {cartItem.quantity}
      <Icon name="angle right" onClick={() => cart.addItem(cartItem)} />
      <Icon
        name="trash alternate outline"
        onClick={() => cart.clearItemFromCart(cartItem)}
      />
    </>
  );
};

export default QuantitySlider;
