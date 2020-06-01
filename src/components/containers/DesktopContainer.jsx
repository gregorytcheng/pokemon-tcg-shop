import PropTypes from "prop-types";
import {
  Button,
  Responsive,
  Segment,
  Menu,
  Visibility,
  Container,
} from "semantic-ui-react";
import { getWidth } from "../../utils/WindowUtils";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const DesktopContainer = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
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
              active={location.pathname === "/shop"}
              onClick={() => history.push("/shop")}
            >
              Shop
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a">Log in</Button>
              <Button as="a" primary={fixed} style={{ marginLeft: "0.5em" }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Visibility>

      {children}
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
