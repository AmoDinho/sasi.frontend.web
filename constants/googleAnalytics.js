import ReactGA from "react-ga";

export const initGA = () => ReactGA.initialize("G-KHMV0D6Z5S");

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
