import React from "react";
import { IoMenu } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const SiderBar = ({ tab }) => {
  const CssTab1 = tab == 1 ? "bg-maincolor" : "bg-white";
  const CssTab2 = tab == 2 ? "bg-maincolor" : "bg-white";
  const CssTab3 = tab == 3 ? "bg-maincolor" : "bg-white";
  const CssTab4 = tab == 4 ? "bg-maincolor" : "bg-white";
  const CssTab5 = tab == 5 ? "bg-maincolor" : "bg-white";
  const CssTab6 = tab == 6 ? "bg-maincolor" : "bg-white";
  const CssTab7 = tab == 7 ? "bg-maincolor" : "bg-white";

  const navigate = useNavigate();

  const gotoCourse = () => {
    navigate("/admin/course");
  };

  const gotoStudent = () => {
    navigate("/admin/student");
  };

  const gotoClass = () => {
    navigate("/admin/class");
  };

  const gotoTeacher = () => {
    navigate("/admin/teacher");
  };

  const gotoAccount = () => {
    navigate("/admin/account");
  };

  const gotoCenter = () => {
    navigate("/admin/center");
  };

  const gotoFinance = () => {
    navigate("/admin/finance");
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row gap-2 items-center ${CssTab1} py-5 hover:cursor-pointer`}
        onClick={gotoCourse}
      >
        <IoMenu className="text-3xl" />
        <div>Quản lý các khoá học </div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab2} py-5 hover:cursor-pointer`}
        onClick={gotoStudent}
      >
        <IoMenu className="text-3xl" />
        <div>Quản lý thông tin người học</div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab3} py-5 hover:cursor-pointer`}
        onClick={gotoClass}
      >
        <IoMenu className="text-3xl" />
        <div>Quản lý lớp học</div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab4} py-5 hover:cursor-pointer`}
        onClick={gotoTeacher}
      >
        <IoMenu className="text-3xl" />
        <div> Quản lý giảng viên</div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab5} py-5 hover:cursor-pointer`}
        onClick={gotoAccount}
      >
        <IoMenu className="text-3xl" />
        <div>Quản lý tài khoản</div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab6} py-5 hover:cursor-pointer`}
        onClick={gotoCenter}
      >
        <IoMenu className="text-3xl" />
        <div>Quản lý cơ sở</div>
      </div>

      <div
        className={`flex flex-row gap-2 items-center ${CssTab7} py-5 hover:cursor-pointer`}
        onClick={gotoFinance}
      >
        <IoMenu className="text-3xl" />
        <div>Quản tài chính</div>
      </div>
    </div>
  );
};

export default SiderBar;
