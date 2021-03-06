import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import App from "../App";
import { SocialButton } from "../ui/buttons";
import { BodyOne } from "../ui/Typography";
import { HeadingOne } from "../ui/Typography";
import { socialLinks, track } from "../../constants";
import { GET_ALL_PHOTOS } from "../../graphql/photos/queries";
import PhotoCard from "../ui/cards/PhotoCard";
import { ThreeColumnGrid } from "../ui/loaders";
const IndexPage = () => {
  // const [photos, setPhotos] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_PHOTOS);
  track("App.HomePage");
  // useEffect(() => {
  //   if (data) {
  //     setPhotos(data.getAllPhotos);
  //   }
  // }, []);

  if (loading)
    return (
      <>
        <div className="grid md:grid-rows-3  sm:grid-rows-1 place-items-center gap-2 p-4">
          {/* {Array(5)
            .fill("")
            .map((i) => (
              <ThreeColumnGrid key={i} />
            ))} */}
          <ThreeColumnGrid />

          <ThreeColumnGrid />

          <ThreeColumnGrid />
        </div>
      </>
    );
  if (error) return <p>{error.message}</p>;

  console.log(data.getAllPhotos.length);
  // const things = [
  //   "col-start-2 col-span-2",
  //   "col-end-3 col-span-2",
  //   "col-start-1 col-end-4",
  // ];
  // const thing = things[Math.floor(Math.random() * things.length)];
  return (
    <>
      <div className="grid  md:grid-rows-3 md:grid-cols-2  sm:grid-cols-1 gap-2">
        {data.getAllPhotos.length !== 0 &&
          data.getAllPhotos.map((photo) => (
            <PhotoCard
              photo={photo}
              key={photo.ID}
              imageAlt={photo.ID}
              // className={thing}
            />
          ))}
      </div>
      <div className=" mt-12 p-3 flex justify-center">
        {socialLinks.map((link, index) => (
          <SocialButton className="mx-3 my-3" url={link.url} key={index}>
            {link.icon}{" "}
          </SocialButton>
        ))}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   });

//   return addApolloState(apolloClient, {
//     props: {},
//     revalidate: 1,
//   });
// }

export default IndexPage;
