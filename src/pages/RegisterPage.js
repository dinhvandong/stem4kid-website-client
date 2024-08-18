import React from "react";
import RegisterTable from "../componentAdmin/table/RegisterTable";

const RegisterPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-auto flex">
        <div className="w-[5px] h-screen  border-l-[5px] border-red-700"></div>
        <div className="w-[100%] ">
          <RegisterTable />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
