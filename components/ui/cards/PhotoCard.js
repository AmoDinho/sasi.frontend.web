import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const PhotoCard = ({ imageURL, imageAlt, className }) => {
  return (
    <img
      src={imageURL}
      alt={imageAlt}
      className={`${className} rounded-lg`}
      //   width={250}
      //   height={100}
    />
  );
};

export default PhotoCard;
