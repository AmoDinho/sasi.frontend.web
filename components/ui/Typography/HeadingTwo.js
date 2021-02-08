import React from 'react';
import PropTypes from 'prop-types'

const HeadingTwo = ({className, children}) => {

    return(
        <h2 className = {`${className} text-bold font-display text-xl text-white text-bold`}>{children}</h2>
    );
};

HeadingTwo.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

HeadingTwo.defaultProps = {
    className:"",
};

export default HeadingTwo;