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
    </App>
  );
};

export default IndexPage;
