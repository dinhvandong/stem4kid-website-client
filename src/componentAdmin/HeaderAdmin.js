import React from "react";
import logo from "..//assets/logo.png";
import SearchInput from "./SearchInput ";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

const HeaderAdmin = () => {
  return (
    <div className="flex flex-row bg-maincolor w-full h-full items-center ">
      <div className="w-full ">
        {/* <a href="/admin" title="Home Page" className=""> */}
        <img src={logo} alt="logo" className="w-[100px] h-fit" />
        {/* </a> */}
      </div>

      <div className="flex flex-row items-center w-full">
        <SearchInput className="w-full" />
      </div>

      <div className="flex flex-row items-center justify-end gap-5 w-full text-2xl font-bold text-textmaincolor">
        <div className="">Forum</div>
        <div className="">Get Help</div>
        <div>
          <IoNotifications />
        </div>
        <div>
          <MdOutlineAccountCircle />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
