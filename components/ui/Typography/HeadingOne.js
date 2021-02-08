import React from 'react';
import PropTypes from 'prop-types'

const HeadingOne = ({className, children}) => {

    return(
        <h1 className = {`${className} font-display text-4xl text-white text-bold`}>{children}</h1>
    );
};

HeadingOne.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

HeadingOne.defaultProps = {
    className:"",
};

export default HeadingOne;