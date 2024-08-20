import React from "react";
import logo from "..//assets/logo.png";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";

const HeaderAdmin = () => {
  return (
    <div className="flex flex-row bg-[#ffffff] w-full h-full items-center ">
      <div className="w-[10%] px-5">
        <a href="/admin" title="Home Page" className="">
          <img src={logo} alt="logo" className="w-[100px] h-fit" />
        </a>
      </div>

      {/* <div className="flex flex-row items-center w-full">
        <SearchInput className="w-full" />
      </div> */}

      <div className="flex flex-row items-center justify-end gap-7 px-3 w-full text-2xl font-bold text-[#e056fd]">
        <div className="">Forum</div>
        <div className="">Get Help</div>
        <div>
          <IoMdSettings />
        </div>
        <div>
          <TfiWorld />
        </div>
        <div>
          <IoNotifications />
        </div>
        <div>
          <MdOutlineAccountCircle />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
