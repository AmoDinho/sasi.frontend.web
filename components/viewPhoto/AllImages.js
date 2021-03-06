import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { HeadingTwo } from "../ui/Typography";
import { GET_ALL_PHOTOS } from "../../graphql/photos/queries";
import PhotoCard from "../ui/cards/PhotoCard";
const AllImages = ({ id }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_PHOTOS);

  /*TO-DO 
Add mixpanel
  */
  useEffect(() => {
    if (data) {
      const allPhotos = data.getAllPhotos;
      const filterdPhotos = allPhotos.filter((photo) => photo.ID !== id);
      setAllPhotos(filterdPhotos);
    }
  }, [data]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>ALL out of SAS.</p>;
  return (
    <div className="p-4">
      <HeadingTwo className="mb-5">Hey we've got some nice things!</HeadingTwo>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 ">
        {allPhotos.map((photo) => (
          <PhotoCard photo={photo} key={photo.ID} imageAlt={photo.ID} />
        ))}
      </div>
    </div>
  );
};

export default AllImages;
