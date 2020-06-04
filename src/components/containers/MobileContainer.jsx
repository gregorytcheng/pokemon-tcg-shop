import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Sidebar,
} from "semantic-ui-react";
import { getWidth } from "./../../utils/WindowUtils";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { signInWithGoogle } from "./../../utils/FirebaseUtils";
import Avatar from "./../Avatar";
import CartPopupButton from "../CartPopupButton";

const MobileContainer = ({ children }) => {
  const history = useHistory();
  const user = useContext(UserContext);

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item
          as="a"
          active
          onClick={() => {
            history.push("/");
            handleSidebarHide();
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => {
            history.push("/shop");
            handleSidebarHide();
          }}
        >
          Shop
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Container>
          <Menu pointing secondary>
            <Menu.Item onClick={handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
              {user === null ? (
                <Button
                  primary
                  size={"small"}
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
          </Menu>
        </Container>
        <Container style={{ marginTop: "25px", marginBottom: "25px" }}>
          {children}
        </Container>
      </Sidebar.Pusher>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
