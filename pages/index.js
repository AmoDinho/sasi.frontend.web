import App from "../components/App";
// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => (
  <App>
    <h1 className="text-green-500 font-display p-5">WELCOME TO SASSY WORLD</h1>
    <p className="text-green-700 font-display p-5">
      We are busy making a PLACE to get to multirracial stock images :D
    </p>
  </App>
);

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
