import React from "react";
import PropTypes from "prop-types";

const SocialButton = ({
  url,
  className = "",
  onClick,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${className} cursor-pointer flex items-center justify-center rounded-full shadow-md h-10 w-10 py-2 bg-gray-200 hover:border-2 hover:bg-gray-500`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <a
        className=" text-gray-800"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </button>
  );
};

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};

SocialButton.propTypes = propTypes;
export default SocialButton;
