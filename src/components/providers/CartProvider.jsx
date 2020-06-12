import React, { useState, useEffect } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from "../../utils/CartUtils";
import CartContext from "../../contexts/CartContext";
import { LOCAL_STORAGE_CART_KEY } from "../../utils/CartUtils";
import PropTypes from "prop-types";

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItem = (item) =>
    setCartItemsAndPersist(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItemsAndPersist(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItemsAndPersist(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  const setCartItemsAndPersist = (cartItems) => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
    setCartItems(cartItems);
  };

  useEffect(() => {
    setCartItems(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) ?? []
    );
  }, []);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
