import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { track } from "../../../constants";
// add inclick event that direcst to photo
// passes ID in function
//routing ;ibrary in next
const PhotoCard = ({ photo, imageAlt, className }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  /*TO-DO 
Add mixpanel
  */
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
      onClick={() => {
        track("App.ClickToViewPhoto");
        router.push(`/photo/${photo.ID}`);
      }}
      className={`cursor-pointer w-full h-full`}
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
