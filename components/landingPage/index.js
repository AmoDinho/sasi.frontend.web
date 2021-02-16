import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import App from "../components/App";
import { SocialButton } from "../ui/buttons";
import { BodyOne } from "../ui/Typography";
import { HeadingOne } from "../ui/Typography";
import { socialLinks, track } from "../constants";
import { GET_ALL_PHOTOS } from "../../graphql/photos/queries";
import PhotoCard from "../ui/cards/PhotoCard";
import { ThreeColumnGrid } from "../ui/loaders";
const IndexPage = () => {
  // const [photos, setPhotos] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_PHOTOS);
  track("App.HomePage");
  // const loading = true;
  // useEffect(() => {
  //   if (data) {
  //     setPhotos(data.getAllPhotos);
  //   }
  // }, []);

  if (loading)
    return (
      <App>
        <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-">
          {Array(5)
            .fill("")
            .map((i) => (
              <ThreeColumnGrid key={i} />
            ))}
        </div>
      </App>
    );
  if (error) return <p>{error.message}</p>;

  // const things = [
  //   "col-start-2 col-span-2",
  //   "col-end-3 col-span-2",
  //   "col-start-1 col-end-4",
  // ];
  // const thing = things[Math.floor(Math.random() * things.length)];
  return (
    <App>
      <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-2">
        {data.getAllPhotos.length !== 0 &&
          data.getAllPhotos.map((photo) => (
            <PhotoCard
              imageURL={photo.s3URL}
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
