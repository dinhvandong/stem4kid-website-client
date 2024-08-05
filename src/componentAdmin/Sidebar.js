import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineCastForEducation } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiAccountCircleLine } from "react-icons/ri";
import TableCourse from "./table/TableCourse";
import HeaderAdmin from "./HeaderAdmin";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const contentList = [
    "TableCourse",
    HeaderAdmin,
    "Content 3",
    // Add more content as needed
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`h-full w-1/6 bg-maincolor text-textmaincolor ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-1 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Menu</h1>

          {/* <button
            key={index}
            className="mt-4 text-xl font-semibold flex flex-row items-center gap-3 hover:bg-blue-700 hover:text-white rounded-lg"
            onClick={() => handleButtonClick(setActiveIndex)}
          >
            <MdOutlineCastForEducation className="text-4xl" />
            Quản lý các khoá học
          </button> */}
          {contentList.map((content, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
              onClick={() => handleButtonClick(index)}
            >
              Button {index + 1}
            </button>
          ))}
          {/* {showContent && (
            <div className="mt-4">
              <TableCourse />
            </div>
          )} */}
          <button className="text-xl font-semibold flex flex-row items-center gap-3 hover:bg-blue-700 hover:text-white rounded-lg ">
            <PiStudentBold className="text-4xl" />
            Quản lý thông tin người học
          </button>
          <button className="text-xl font-semibold flex flex-row items-center gap-3 hover:bg-blue-700 hover:text-white rounded-lg">
            <GiTeacher className="text-4xl" />
            Quản lý lớp học
          </button>
          <button className="text-xl font-semibold flex flex-row items-center gap-3 hover:bg-blue-700 hover:text-white rounded-lg">
            <LiaChalkboardTeacherSolid className="text-4xl" />
            Quản lý giảng viên
          </button>
          <button className="text-xl font-semibold flex flex-row items-center gap-3 hover:bg-blue-700 hover:text-white rounded-lg">
            <RiAccountCircleLine className="text-4xl" />
            Quản lý tài khoản
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <button
          className="bg-gray-800 text-white p-2 flex items-center"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <>
              <div>
                <IoIosArrowBack />
              </div>
            </>
          ) : (
            <>
              <div>
                <IoMenu />
              </div>
            </>
          )}
        </button>
        <div className="w-3/4 p-4">
          {contentList.map((content, index) => (
            <div key={index} className={activeIndex === index ? "" : "hidden"}>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
