import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks } from "../constants";

// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {
  return (
    <App>
      <HeadingOne className="text-center font-medium bg-clip-text my text-transparent bg-gradient-to-r from-gradient-three-colorB to-gradient-three-colorA flex justify-center my-2 ">
        {" "}
        Welcome to SASI World
      </HeadingOne>
      <BodyOne className=" p-4 text-center">
        Finding the right visuals to use for your business can be a daunting
        task! <br />
        <br />
        This is why we are creating SASI.
        <br />
        <br /> Content that is created to make your business stand out.
        <br /> <br />
        Get access to empowering imagery that promotes realness and celebrate
        our unique differences.
        <br />
        <br />
        Sign up and we'll notify you as soon as you can download some Free
        Quality content! Get SASI imagery that speaks to your audience.
        <br />
        <br />
        An easier way of marketing your product and business with relevant
        content.
      </BodyOne>

      <div className=" p-3 flex justify-center">
        {socialLinks.map((link, index) => (
          <SocialButton className="mx-3 my-3" key={index}>
            <a className=" text-gray-800" href={link.url}>
              {link.icon}{" "}
            </a>
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
