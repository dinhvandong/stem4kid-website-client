import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import SubjectTable from "../componentAdmin/table/SubjectTable";

const SubjectPage = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%]">
          <SubjectTable />
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
