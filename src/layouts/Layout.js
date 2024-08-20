import React, { useState } from "react";
import SliderBar from "../componentAdmin/SiderBar";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import { IoMenu } from "react-icons/io5";
import Footer from "../component/Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-wrapper h-screen flex flex-col">
      <div className="header w-full">
        <HeaderAdmin toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex w-full">
        <div
          className={`navbar ${
            isSidebarOpen ? "w-[320px]" : "w-[50px]"
          } bg-bgsiderBar py-3 transition-all duration-300 ease-in-out`}
        >
          <button
            className="px-3 flex flex-row gap-2 text-2xl items-center"
            onClick={toggleSidebar}
          >
            <IoMenu className="text-3xl text-black" />
            <div className=" text-4xl font-bold text-black">MENU</div>
          </button>
          <SliderBar isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="w-full">{children}</div>
      </div>
      <div className="items-center">This Is Fotter</div>
    </div>
  );
};

export default Layout;
