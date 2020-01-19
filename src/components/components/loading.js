import Loader from "react-loader-spinner";
import React from "react";

export const Loading = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};
