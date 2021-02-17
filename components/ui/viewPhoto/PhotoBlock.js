import React from "react";
import image from "next/image";
import HeadingOne from "../Typography/HeadingOne";
import BodyOne from "../Typography/BodyOne";
import GreenButton from "../buttons/GreenButton";

const PhotoBlock = ({ imageURL, imageAlt, className, contributorName }) => {
  return (
    <div className=" grid-rows-2 grid-flow-col gap-2">
      <div>
        <img
          src={imageURL}
          alt={imageAlt}
          className={`${className} rounded-lg`}
        />
      </div>
      <div>
        <HeadingOne>{contributorName}</HeadingOne>
        <BodyOne className="font-bold">Attribution is not mandatory</BodyOne>
        <BodyOne>But we would really appreciate it</BodyOne>
        <GreenButton>Download</GreenButton>
      </div>
    </div>
  );
};

export default PhotoBlock;
