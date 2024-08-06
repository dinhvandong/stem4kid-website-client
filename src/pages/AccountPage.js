import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";

const AccountPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-[10vh]">
        <HeaderAdmin />
      </div>
      <div className="w-full h-auto flex">
        <div className="w-[15%] ">
          <SiderBar tab={5} />
        </div>

        <div className="w-[85%] bg-red-500"></div>
      </div>
      {/* <Test /> */}
    </div>
  );
};
export default AccountPage;
