import React, { children } from "react";
import PropTypes from "prop-types";

const GreenButton = ({
  className = "",
  onClick,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${className} uppercase cursor-pointer rounded-lg shadow-md py-2 bg-gradient-to-r from-gradient-three-colorA to-gradient-three-colorB `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};

GreenButton.propTypes = propTypes;
export default GreenButton;

//pull from development
// commit regularly
//for every compomnent make a pull request
