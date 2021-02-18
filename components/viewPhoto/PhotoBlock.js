import React from "react";
import image from "next/image";
import HeadingTwo from "../ui/Typography/HeadingTwo";
import BodyOne from "../ui/Typography/BodyOne";
import GreenButton from "../ui/buttons/GreenButton";

const PhotoBlock = ({ photo, className, ...props }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-2 p-4">
      <div>
        <img
          src={photo.s3URL}
          alt={`Sasi-images`}
          className={`${className} rounded-lg h-auto`}
        />
      </div>
      <div>
        <HeadingTwo>{photo.contributorUsername}</HeadingTwo>
        <BodyOne className="font-bold">Attribution is not mandatory</BodyOne>
        <BodyOne>But we would really appreciate it</BodyOne>
        <GreenButton>Download</GreenButton>
      </div>
    </div>
  );
};

export default PhotoBlock;
