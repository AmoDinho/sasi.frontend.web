import React from "react";
import ContentLoader from "react-content-loader";

export const ThreeColumnGrid = (props) => {
  return (
    <ContentLoader viewBox="0 0 820 450" height={450} width={820} {...props}>
      <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
    </ContentLoader>
  );
};

export const SingleImage = (props) => {
  return (
    <ContentLoader
      width={450}
      height={400}
      viewBox="0 0 450 400"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
    >
      <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
      <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
      <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
    </ContentLoader>
  );
};
