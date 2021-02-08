import React from 'react';
import PropTypes from 'prop-types';

const OrangeButton = ({
    className = "",
    onClick,
    children,
    disabled = false,
    ...props

}) => {
    
    
    return(
        <button className ={`${className} uppercase cursor-pointer rounded-full shadow-md py-2 bg-gradient-to-r from-gradient-two-colorA to-gradient-two-colorB `}
        onClick ={onClick}
        disabled ={disabled}
        {...props}
        >
            {children}
        </button>
 
    );  
};

const propTypes ={
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
};

OrangeButton.propTypes = propTypes;  
export default OrangeButton;