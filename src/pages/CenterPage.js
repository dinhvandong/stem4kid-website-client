import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import CenterTable from "../componentAdmin/table/CenterTable";
import { useNavigate } from "react-router-dom";

const CenterPage = () => {
  const navigate = useNavigate();
  const goToAddCenter = () => {
    navigate("/admin/add/center");
  };
  return (
    <div className="flex flex-col">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%] px-2">
          <button
            className="px-3 py-3 bg-blue-500 rounded-md mb-3 font-bold"
            onClick={goToAddCenter}
          >
            ADD CENTER
          </button>
          <CenterTable />
        </div>
      </div>
    </div>
  );
};

export default CenterPage;
