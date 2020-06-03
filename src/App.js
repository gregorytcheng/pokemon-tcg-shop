import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResponsiveContainer from "./components/containers/ResponsiveContainer";
import { auth } from "./utils/FirebaseUtils";
import UserContext from "./contexts/UserContext";
import ShopPage from "./components/pages/ShopPage";
import CartPage from "./components/pages/CartPage";
import CardPage from "./components/pages/CardPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import CartProvider from "./components/providers/CartProvider";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup function allows us to unsubscribe before unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <CartProvider>
          <ResponsiveContainer>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/:cardId" component={CardPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </ResponsiveContainer>
        </CartProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
