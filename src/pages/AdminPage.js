import React from "react";
import TableCourse from "../componentAdmin/table/TableCourse";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const goToAddCourse = () => {
    navigate("/admin/add/course");
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%] px-2">
          <button
            className="px-3 py-3 bg-blue-500 rounded-md mb-3 font-bold"
            onClick={goToAddCourse}
          >
            ADD COURSE
          </button>
          <TableCourse />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
