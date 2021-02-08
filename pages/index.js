import App from "../components/App";
import {SocialButton} from "../components/ui/buttons";
import {BodyOne} from "../components/ui/Typography";
import {HeadingOne} from "../components/ui/Typography";
import {HeadingTwo} from "../components/ui/Typography";
import {socialLinks} from "../constants"


// import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => {

  return(
    <App>
      
      <HeadingOne className = "text-center flex justify-center my-2 "> Welcome to SASI World</HeadingOne>
      <BodyOne className = " p-4 text-center">I'm baby readymade thundercats offal, semiotics swag subway tile actually jianbing. Enamel pin pok pok cliche live-edge disrupt put a bird on it tote bag master cleanse subway tile heirloom cred kombucha seitan kogi lo-fi. Raclette wolf celiac man braid, migas neutra taxidermy twee chartreuse adaptogen kombucha put a bird on it. Vape chicharrones pok pok try-hard humblebrag mumblecore. Waistcoat wayfarers tofu, pork belly viral edison bulb raw denim selvage cred gochujang mixtape cardigan distillery etsy leggings. Mixtape lomo readymade pok pok gluten-free crucifix. Etsy blog lo-fi everyday carry tbh.</BodyOne>  
  
    <div className =" p-3 flex justify-center">
      {socialLinks.map((link, index) => (
        <SocialButton key={index} >{link.icon} </SocialButton>
      ))}
    </div>
     </App>
  )
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
