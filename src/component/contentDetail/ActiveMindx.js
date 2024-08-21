import React from "react";
import activeMindX from "../../assets/activeMindX.png";

const ActiveMindx = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div className="md:text-5xl text-2xl font-extrabold text-textmaincolor mt-10 md:mb-5 ">
        HÌNH ẢNH HOẠT ĐỘNG TẠI STEM4KIDS
      </div>
      <hr className="border border-textmaincolor w-[18%] items-center"></hr>
      {/* <a href="/" title="Home Page" className=""> */}
      <img src={activeMindX} alt="" className="w-[80%] h-full" />
      {/* </a> */}
    </div>
  );
};

export default ActiveMindx;
