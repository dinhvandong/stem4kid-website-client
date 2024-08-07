import React from "react";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import SiderBar from "../componentAdmin/SiderBar";
import StudentTable from "../componentAdmin/table/StudentTable";

const StudentPage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[10vh]">
        <HeaderAdmin />
      </div>
      <div className="w-full h-auto flex">
        <div className="w-[15%] ">
          <SiderBar tab={2} />
        </div>

        <div className="w-[85%] ">
          <div>
            <StudentTable />
          </div>
        </div>
      </div>
      {/* <Test /> */}
    </div>
  );
};

export default StudentPage;
