import React, { useEffect, useState } from "react";
import PhotoBlock from "./PhotoBlock";
import { useQuery } from "@apollo/client";
import { GET_A_PHOTO } from "../../graphql/photos/queries";
import AllImages from "./AllImages";
import { track } from "../../constants";
import { SingleImage } from "../ui/loaders";
/*TO-DO 
Add mixpanel
  */
const ViewPhoto = (props) => {
  const { id } = props;
  const [photo, setPhoto] = useState({});
  let loading = true;
  const { data, error } = useQuery(GET_A_PHOTO, {
    variables: {
      ID: id,
    },
  });

  //useEffect
  useEffect(() => {
    if (props.id) {
      track(`App.ViewPhoto`, {
        photoID: props.id.slice(0, 5),
      });
    }
  }, [props.id]);
  useEffect(() => {
    //useState Hook
    if (data) {
      setPhoto(data.getAPhoto);
    }
  }, [data]);

  if (loading)
    return (
      <div className="flex justify-center">
        <SingleImage />
      </div>
    );
  if (error) return <p>ALL out of SAS.</p>;
  return (
    <div className="flex flex-col">
      <PhotoBlock photo={photo} />

      <AllImages id={id} />
    </div>
  );
};

export default ViewPhoto;
