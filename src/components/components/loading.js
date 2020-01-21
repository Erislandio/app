import Loader from "react-loader-spinner";
import React from "react";

export const Loading = ({ height, width }) => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={height ? height : 50}
      width={width ? width : 50}
      timeout={3000}
    />
  );
};
