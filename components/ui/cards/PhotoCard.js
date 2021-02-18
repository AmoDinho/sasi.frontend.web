import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from "next/router";
import { Router } from "next/router";
// add inclick event that direcst to photo
// passes ID in function
//routing ;ibrary in next
const PhotoCard = ({ photo, imageAlt, className }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
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
      onClick={() => router.push(`/photo/${photo.ID}`)}
      className={`cursor-pointer`}
    >
      <img
        src={photo.s3URL}
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
