import App from "../components/App";
import { SocialButton } from "../components/ui/buttons";
import { BodyOne } from "../components/ui/Typography";
import { HeadingOne } from "../components/ui/Typography";
import { socialLinks, track } from "../constants";
import LandingPage from "../components/landingPage";

// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {
  track("App.HomePage");
  return (
    <App>
      <LandingPage />

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
