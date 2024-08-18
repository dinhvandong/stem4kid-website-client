import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import FinanceTable from "../componentAdmin/table/FinanceTable";

const FinancePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%]">
          <FinanceTable />
        </div>
      </div>
    </div>
  );
};
export default FinancePage;
