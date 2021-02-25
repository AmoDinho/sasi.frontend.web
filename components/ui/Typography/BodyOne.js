import React from "react";
import PropTypes from "prop-types";

const BodyOne = ({ className, children, ...props }) => {
  return (
    <p {...props} className={`${className}  font-display text-sm text-white`}>
      {children}
    </p>
  );
};

BodyOne.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

BodyOne.defaultProps = {
  className: "",
};

export default BodyOne;
