import React from "react";
import DesktopContainer from "./DesktopContainer";
import PropTypes from "prop-types";
import MobileContainer from "./MobileContainer";

const ResponsiveContainer = ({ children }, props) => (
  <>
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
