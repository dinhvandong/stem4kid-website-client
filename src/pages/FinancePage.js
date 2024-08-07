import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import FinanceTable from "../componentAdmin/table/FinanceTable";

const FinancePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-[10vh]">
        <HeaderAdmin />
      </div>
      <div className="w-full h-auto flex">
        <div className="w-[15%] ">
          <SiderBar tab={7} />
        </div>
        <div className="w-[3px] h-screen bg-black border-l border-red-700"></div>
        <div className="w-[85%]">
          <FinanceTable />
        </div>
      </div>
    </div>
  );
};
export default FinancePage;
