import { useQuery } from "@apollo/client";
import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks, track } from "../constants";
import { GET_ALL_PHOTOS } from "../graphql/photos/queries";
// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_PHOTOS);
  track("App.HomePage");

  if (data) {
    console.log(data);
  }
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <App>
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
