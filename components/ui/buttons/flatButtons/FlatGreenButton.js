import React, {children} from 'react';
import PropTypes from "prop-types";

const FlatGreenButton = ({
    className = "",
    onClick,
    children,
    disabled = false,
    ...props

}) => {
    
    
    return(
        <button className ={`${className} uppercase cursor-pointer rounded-lg shadow-md py-2 text-flat-600 bg-transparent  border-2 border-solid  hover:bg-flat-600 hover:text-white hover:border hover:border-flat-600 active:bg-flat-600`}
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

FlatGreenButton.propTypes = propTypes;  
export default FlatGreenButton;