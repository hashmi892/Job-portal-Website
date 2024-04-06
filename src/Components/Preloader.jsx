import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-mainColor">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Preloader;
