import React, { useState, useEffect } from "react";
import { auth } from "../../utils/FirebaseUtils";
import UserContext from "../../contexts/UserContext";
import PropTypes from "prop-types";

const UserProvider = ({ children }) => {
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
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
