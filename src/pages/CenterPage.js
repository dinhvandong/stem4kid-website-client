import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import CenterTable from "../componentAdmin/table/CenterTable";

const CenterPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%] ">
          <CenterTable />
        </div>
      </div>
    </div>
  );
};

export default CenterPage;
