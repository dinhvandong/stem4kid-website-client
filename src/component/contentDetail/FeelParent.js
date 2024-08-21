import React from "react";
import feelParent from "../../assets/feelParent.png";

const FeelParent = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div className="md:text-5xl text-4xl font-extrabold text-textmaincolor mt-10 mb-5 ">
        CẢM NHẬN PHỤ HUYNH
      </div>
      <div className="md:text-2xl text-lg font-semibold items-center">
        <div>
          Sự tin tưởng của phụ huynh là bảo chứng cho chất lượng tại Stem4kids
        </div>
      </div>
      <hr className="border border-textmaincolor md:w-[18%] w-[30%] items-center"></hr>

      <div className="flex flex-row w-full justify-between gap-10 mt-5 md:w-[80%] md:h-[500px]">
        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%] "
        />

        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%]"
        />

        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%]"
        />
      </div>

      <div className="flex flex-row w-full justify-between gap-10 mt-5 md:w-[80%] md:h-[500px]">
        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%]"
        />

        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%]"
        />

        <img
          src={feelParent}
          alt=""
          className="object-cover transform transition-transform hover:scale-110 md:w-full w-[30%]"
        />
      </div>
    </div>
  );
};

export default FeelParent;
