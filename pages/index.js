import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks, track } from "../constants";
import { GET_ALL_PHOTOS } from "../graphql/photos/queries";
import PhotoCard from "../components/ui/cards/PhotoCard";
import { ThreeColumnGrid } from "../components/ui/loaders";
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
      <App>
        <ThreeColumnGrid />
      </App>
    );
  if (error) return <p>{error.message}</p>;
  return (
    <App>
      <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-2">
        {data.getAllPhotos.length !== 0 &&
          data.getAllPhotos.map((photo) => (
            <PhotoCard
              imageURL={photo.s3URL}
              key={photo.ID}
              imageAlt={photo.ID}
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
    </App>
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
