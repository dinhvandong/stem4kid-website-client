import React from "react";
import SlideImageWork from "./SlideImageWork";

const SlideImage2 = () => {
  return (
    <div className="flex flex-row mt-10 w-[90%] justify-center  h-[600px] ml-28">
      <div className="w-[60%] h-full items-center">
        <SlideImageWork />
      </div>
      <div className="w-[40%] bg-red-700  h-[600px] ">aa</div>
    </div>
  );
};

export default SlideImage2;
