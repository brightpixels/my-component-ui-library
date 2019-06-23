import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, bg }) => (
  <button
    style={{
      padding: "10px 20px",
      border: "none",
      color: "white",
      fontSize: "16px",
      background: bg
    }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string
};

Button.defaultProps = {
  bg: "#24a7fd"
};

export default Button;
