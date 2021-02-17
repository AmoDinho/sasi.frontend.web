import React from "react";
import image from "next/image";
import HeadingTwo from "../ui/Typography/HeadingTwo";
import BodyOne from "../ui/Typography/BodyOne";
import GreenButton from "../ui/buttons/GreenButton";

const PhotoBlock = ({ photo, className, ...props }) => {
  return (
    <div className=" grid-rows-2 grid-flow-col gap-2">
      <div>
        <img
          src={photo.imageURL}
          alt={imageAlt}
          className={`${className} rounded-lg`}
        />
      </div>
      <div>
        <HeadingTwo>{contributorName}</HeadingTwo>
        <BodyOne className="font-bold">Attribution is not mandatory</BodyOne>
        <BodyOne>But we would really appreciate it</BodyOne>
        <GreenButton>Download</GreenButton>
      </div>
    </div>
  );
};

export default PhotoBlock;
