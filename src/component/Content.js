import React from "react";
import SignupContent from "./contentDetail/SignupContent";
import CarouselHome from "./carouselImgage/CarouselHome";
import Content2 from "./contentDetail/Content2";
import Content3 from "./contentDetail/Content3";
import Content4 from "./contentDetail/Content4";
import NumberTalk from "./contentDetail/NumberTalk";
import FeelParent from "./contentDetail/FeelParent";

const Content = () => {
  return (
    <div className="flex flex-col gap-0">
      <div className="mt-24 relative">
        <div>
          <CarouselHome />
          <div className="absolute flex bottom-8 left-0 right-0 w-full justify-center ">
            <button className="px-5 py-2 auto-zoom-out-button   bg-white rounded-md text-2xl w-[280px] text-red-600 font-bold">
              HỌC THỬ MIỄN PHÍ
            </button>
          </div>
        </div>
      </div>
      <SignupContent />
      <Content2 />
      <Content3 />
      <Content4 />
      <NumberTalk />
      <FeelParent />
    </div>
  );
};

export default Content;
