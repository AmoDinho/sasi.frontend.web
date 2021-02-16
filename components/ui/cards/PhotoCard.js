import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const PhotoCard = ({ imageURL, imageAlt, className }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <img
        src={imageURL}
        alt={imageAlt}
        className={`${className} rounded-lg `}
        onMouseOver={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
        //   width={250}
        //   height={100}
      />
    </div>
  );
};

export default PhotoCard;
