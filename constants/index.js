import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mixpanel from "mixpanel-browser";
mixpanel.init("d276a161adcc9b99b31200bd2a555a62");
export const track = (name, props) => {
  mixpanel.track(name, props);
};

export const socialIcons = {
  Instagram: faInstagram,
  Twitter: faTwitter,
  Facebook: faFacebookF,
  Pinterest: faPinterest,
};
export const socialLinks = [
  {
    url: "https://www.pinterest.co.uk/real_sasi/_saved/",
    icon: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    url: "https://twitter.com/sasi_world ",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    url: "https://www.instagram.com/sasi.world/",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
];
