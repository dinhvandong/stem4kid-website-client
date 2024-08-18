import React from "react";
import SliderBar from "../componentAdmin/SiderBar";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper h-screen flex items-center flex-col">
      <div className="header w-full">
        <HeaderAdmin />
      </div>
      <div className="flex w-full flex-row ">
        <div className="navbar w-[300px] bg-[#504d82] py-5 ">
          <SliderBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
