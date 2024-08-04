import React from "react";
import HorizontalImageList from "../carouselImgage/HorizontalImageList";

const StudentMindX = () => {
  return (
    <div className="h-full flex flex-col items-center gap-5 mb-10 bg-[#f5f5f5]">
      <div className="md:text-4xl text-2xl font-extrabold text-textmaincolor mt-10 mb-2 ">
        THÀNH TÍCH CỦA HỌC VIÊN STEM4KIDS
      </div>
      <div className="mb-10">
        <HorizontalImageList />
      </div>
    </div>
  );
};

export default StudentMindX;
