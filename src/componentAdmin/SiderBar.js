import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const SiderBar = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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

  const gotoRegister = () => {
    navigate("/admin/register");
  };

  const gotoSubject = () => {
    navigate("/admin/subject");
  };

  const tabs = [
    { name: "Quản Lý Khoá Học", action: gotoCourse },
    { name: "Quản Lý Học Viên", action: gotoStudent },
    { name: "Quản Lớp Học", action: gotoClass },
    { name: "Quản Giảng Viên", action: gotoTeacher },
    { name: "Quản Lý Tài Khoản", action: gotoAccount },
    { name: "Quản Lý Cơ Sở", action: gotoCenter },
    { name: "Quản Lý Tài Chính", action: gotoFinance },
    { name: "Quản Lý Người Đăng Kí", action: gotoRegister },
    { name: "Quản Lý Môn Học", action: gotoSubject },
  ];

  return (
    <div className="flex flex-col text-lg text-white font-medium justify-start">
      {tabs.map((item, index) => {
        const bgColorClass =
          index === activeTabIndex ? "bg-white text-black" : "bg-transparent";

        return (
          <div
            key={JSON.stringify(item)}
            className={`flex flex-row gap-2 items-center py-5 px-3 hover:cursor-pointer ${bgColorClass}`}
            onClick={() => {
              setActiveTabIndex(index);
              item.action();
            }}
          >
            <IoMenu className="text-3xl" />
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SiderBar;
