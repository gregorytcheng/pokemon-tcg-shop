import PropTypes from "prop-types";
import {
  Button,
  Responsive,
  Menu,
  Visibility,
  Container,
} from "semantic-ui-react";
import { getWidth } from "../../utils/WindowUtils";
import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { signInWithGoogle } from "./../../utils/FirebaseUtils";
import UserContext from "./../../contexts/UserContext";
import Avatar from "../Avatar";
import CartPopupButton from "../CartPopupButton";

const DesktopContainer = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const user = useContext(UserContext);
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Menu
          fixed={fixed ? "top" : null}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item
              as="a"
              active={location.pathname === "/"}
              onClick={() => history.push("/")}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as="a"
              active={location.pathname.startsWith("/shop")}
              onClick={() => history.push("/shop")}
            >
              Shop
            </Menu.Item>
            <Menu.Item position="right">
              {user === null ? (
                <Button
                  primary
                  style={{ marginLeft: "0.5em" }}
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </Button>
              ) : (
                <>
                  <Avatar
                    displayName={user.displayName}
                    photoURL={user.photoURL}
                  />
                  <div
                    style={{ marginLeft: "0.5em", cursor: "pointer" }}
                    onClick={() => user.signOut()}
                  >
                    (<u>sign out</u>)
                  </div>
                </>
              )}
              <CartPopupButton />
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>
      <div style={{ marginTop: "25px", marginBottom: "25px" }}>{children}</div>
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
