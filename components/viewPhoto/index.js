import React, { useEffect, useState } from "react";
import PhotoBlock from "./PhotoBlock";
import { useQuery } from "@apollo/client";
import { GET_A_PHOTO } from "../../graphql/photos/queries";
const ViewPhoto = () => {
  const { data, loading, error } = useQuery(GET_A_PHOTO, {
    variables: {
      ID: "",
    },
  });

  if (data) {
    console.log(data);
  }
  return (
    <>
      <PhotoBlock />
    </>
  );
};

export default ViewPhoto;
