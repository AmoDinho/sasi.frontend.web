import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.GATSBY_MIXPANEL);
export const track = (name, props) => {
  mixpanel.track(name, props);
};
export const socialLinks = [
  {
    url: "https://www.pinterest.co.uk/real_sasi/_saved/",
    icon: "PT",
  },
  {
    url: "https://twitter.com/sasi_world ",
    icon: "TW",
  },
  {
    url: "https://www.instagram.com/sasi.world/",
    icon: "IG",
  },
];
