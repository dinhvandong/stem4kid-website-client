import React from "react";
import Sidebar from "../componentAdmin/Sidebar";
import HeaderAdmin from "../componentAdmin/HeaderAdmin";
import Test from "../componentAdmin/Test";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-[10vh]">
        <HeaderAdmin />
      </div>
      <Sidebar />
      <Test />
    </div>
  );
};

export default AdminPage;
