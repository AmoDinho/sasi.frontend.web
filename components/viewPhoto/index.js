import React, { useEffect, useState } from "react";
import PhotoBlock from "./PhotoBlock";
import { useQuery } from "@apollo/client";
import { GET_A_PHOTO } from "../../graphql/photos/queries";
const ViewPhoto = (props) => {
  const { id } = props;
  const [photo, setPhoto] = useState({});
  const { data, loading, error } = useQuery(GET_A_PHOTO, {
    variables: {
      ID: id,
    },
  });

  //useEffect
  useEffect(() => {
    //useState Hook
    if (data) {
      setPhoto(data.getAPhoto);
    }
  }, [data]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>ALL out of SAS.</p>;
  return (
    <>
      <PhotoBlock photo={photo} />
    </>
  );
};

export default ViewPhoto;
