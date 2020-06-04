import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResponsiveContainer from "./components/containers/ResponsiveContainer";
import ShopPage from "./components/pages/ShopPage";
import CardPage from "./components/pages/CardPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import CartProvider from "./components/providers/CartProvider";
import UserProvider from "./components/providers/UserProvider";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ResponsiveContainer>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/:cardId" component={CardPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </ResponsiveContainer>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
