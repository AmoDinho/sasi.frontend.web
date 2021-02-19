import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks, track } from "../constants";

// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {
  track("App.HomePage");
  return (
    <App>
      <HeadingOne className="text-center  font-medium bg-clip-text my text-transparent bg-gradient-to-r from-gradient-three-colorB to-gradient-three-colorA flex justify-center mt-10 my-2 ">
        {" "}
        Welcome to SASI World
      </HeadingOne>
      <div className="flex flex-col text-center">
        <BodyOne className=" mt-5">
          Finding the right visuals to use for your business can be a daunting
          task!
        </BodyOne>

        <BodyOne className=" mt-5">This is why we are creating SASI.</BodyOne>
        <BodyOne className=" mt-5">
          Content that is created to make your business stand out.
        </BodyOne>
        <BodyOne className=" mt-5">
          Finding the right visuals to use for your business can be a daunting
          task!
        </BodyOne>

        <BodyOne className="mt-5">This is why we are creating SASI.</BodyOne>

        <BodyOne className="mt-5">
          Content that is created to make your business stand out.
        </BodyOne>

        <BodyOne className="mt-5">
          Get access to empowering imagery that promotes realness and celebrate
          our unique differences.
        </BodyOne>
        <BodyOne className="mt-5">
          Sign up and we'll notify you as soon as you can download some Free
          Quality content! Get SASI imagery that speaks to your audience.
        </BodyOne>
        <BodyOne className="mt-5">
          An easier way of marketing your product and business with relevant
          content.
        </BodyOne>
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

export default IndexPage;
