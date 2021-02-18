import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { HeadingTwo } from "../Typography";
import HeadingTwo from "../Typography/HeadingTwo";
import { GET_ALL_PHOTOS } from "../../graphql/photos/queries";

const AllImages = ({ id }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_PHOTOS);

  return (
    <div>
      <HeadingTwo>Hey we've got some nice things!</HeadingTwo>
      <div>All imaged</div>
    </div>
  );
};

export default AllImages;
