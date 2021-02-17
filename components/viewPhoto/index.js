import React, { useEffect, useState } from "react";
import PhotoBlock from "./PhotoBlock";
import { useQuery } from "@apollo/client";
import { GET_A_PHOTO } from "../../graphql/photos/queries";
const ViewPhoto = (props) => {
  const { id } = props;
  const { data, loading, error } = useQuery(GET_A_PHOTO, {
    variables: {
      ID: id,
    },
  });

  //useEffect
  //useState Hook
  if (data) {
    console.log(data);
    // setPhoto(data.getAPhoto)
  }
  return (
    <>
      <PhotoBlock photo={photo} />
    </>
  );
};

export default ViewPhoto;
