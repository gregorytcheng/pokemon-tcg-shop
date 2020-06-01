import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

const Avatar = ({ displayName, photoURL }) => {
  return (
    <>
      <Image src={photoURL} avatar />
      <span>{displayName}</span>
    </>
  );
};
Avatar.propTypes = {
  displayName: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default Avatar;
