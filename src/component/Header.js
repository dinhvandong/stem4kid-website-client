import React, { useRef } from "react";

const Header = () => {
  return (
    <div className="w-full px-5 h-[80px] bg-white flex   fixed items-center text-xl font-medium">
      <div className="flex md:flex-row flex-col w-1/3 md:w-1/6 ">
        <a href="/" title="Home Page" className="">
          <img
            src="https://mindx.edu.vn/logo-200.png"
            alt=""
            className="w-[120px] h-[25]"
          />
        </a>
      </div>

      <div className="hidden md:block md:w-1/6  ">Tại sao chọn MindX</div>
      <div className="md:w-1/6 w-1/3 ">Các khóa học</div>
      <div className="hidden md:block md:w-1/6 ">Báo chí nói về MindX</div>
      <div className="hidden md:block  md:w-1/6 ">Thành tích học viên</div>

      <div className="md:w-1/6 w-1/3">
        <button className="auto-zoom-out-button px-5 py-3  bg-red-600 border  rounded-full p-3 text-white">
          Học thử ngay
        </button>
      </div>

      {/* <div className="flex items-center text-xl font-medium flex-row justify-between w-full"> */}
      {/* <div className="hidden md:block">Tại sao chọn MindX</div>
          <div>Các khóa học</div>
          <div className="hidden md:block">Báo chí nói về MindX</div>
          <div className="hidden md:block">Thành tích học viên</div> */}
      {/* <button className="bg-red-600 border rounded-full p-3 text-white">
            Học thử ngay
          </button> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
