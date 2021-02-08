import App from "../components/App";
import {GreenButton} from "../components/ui/buttons";
import {OrangeButton} from"../components/ui/buttons";
import {SocialButton} from "../components/ui/buttons";
import {FlatGreenButton} from "../components/ui/buttons";
import {Body} from "../components/ui/typography";
import {HeadingOne} from "../components/ui/Typography";
import {HeadingTwo} from "../components/ui/Typography";
// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => (
  <App>
    <h1 className="text-green-500 font-display p-5">WELCOME TO SASSY WORLD</h1>
    <GreenButton>Green Button</GreenButton>
    <FlatGreenButton>Flat G Button</FlatGreenButton>
    <OrangeButton>Orange Button</OrangeButton>
    <HeadingOne>Heading One</HeadingOne>
    <HeadingTwo>Heading Two</HeadingTwo>
    <Body>Gabion booty sheet swab reef chantey hang the jib fluke clipper pressgang. Stern handsomely yo-ho-ho list spanker coffer warp port holystone grog blossom. </Body>
    <SocialButton>SC</SocialButton>


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
