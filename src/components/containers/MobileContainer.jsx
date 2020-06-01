import PropTypes from "prop-types";
import React, { useState } from "react";
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

const MobileContainer = ({ children }) => {
  const history = useHistory();

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
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a" onClick={() => history.push("/shop")}>
          Shop
        </Menu.Item>
        <Menu.Item as="a">Log in</Menu.Item>
        <Menu.Item as="a">Sign Up</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Container>
          <Menu pointing secondary size="large">
            <Menu.Item onClick={handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a">Log in</Button>
              <Button as="a" style={{ marginLeft: "0.5em" }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
