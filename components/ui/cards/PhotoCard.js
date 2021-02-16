import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const PhotoCard = ({ imageURL, imageAlt, className }) => {
  const [show, setShow] = useState(false);
  return (
    <div
    // style={{
    //   backgroundImage: `url(${imageURL})`,
    //   backgroundsize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    //   backgroundAttachment: "fixed",
    // }}
    // onMouseOver={() => setShow(!show)}
    // onMouseLeave={() => setShow(!show)}
    >
      <img
        src={imageURL}
        alt={imageAlt}
        className={`${className} rounded-lg `}
        // onMouseOver={() => setShow(!show)}
        // onMouseLeave={() => setShow(!show)}
        //   width={250}
        //   height={100}
      />
      {show && (
        <p
          className="text-lg text-red-700 z-30"
          style={{ zIndex: "300000000" }}
        >
          Hi
        </p>
      )}
    </div>
  );
};

export default PhotoCard;
