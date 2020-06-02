import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResponsiveContainer from "./components/containers/ResponsiveContainer";
import { auth } from "./utils/FirebaseUtils";
import UserContext from "./contexts/UserContext";
import ShopPage from "./components/pages/ShopPage";

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
        <ResponsiveContainer>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </ResponsiveContainer>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
