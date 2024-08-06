import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-[10vh]">
        <HeaderAdmin />
      </div>
      <div className="w-full h-auto flex">
        <div className="w-[15%] ">
          <SiderBar tab={2} />
        </div>

        <div className="w-[85%] bg-red-500"></div>
      </div>
      {/* <Test /> */}
    </div>
  );
};

export default StudentPage;
