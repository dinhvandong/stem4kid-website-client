import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateCourseModal = ({ isOpen, onClose, onUpdate, course }) => {
  const [updateData, setUpdateData] = useState({
    nameCourse: "",
    courseCode: "",
    category: "",
    instructor: "",
    startDate: "",
    endDate: "",
    durationHours: "",
    courseType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const navigate = useNavigate();
  // const goToCourse = () => {
  //   navigate("/admin/course");
  // };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(updateData);
    onUpdate({
      ...updateData,
    });
  };
  useEffect(() => {
    if (course) {
      setUpdateData({
        nameCourse: course.nameCourse,
        courseCode: course.courseCode,
        category: course.category,
        instructor: course.instructor,
        startDate: course.startDate,
        endDate: course.endDate,
        durationHours: course.durationHours,
        courseType: course.courseType,
      });
    }
  }, [course]);

  if (!isOpen) return null;

  return (
    <div
      className="h-screen w-full flex justify-center items-center text-2xl"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <div className="w-full h-full bg-black opacity-50 z-10"></div>
      <form
        onSubmit={handleSubmit}
        className=" w-[60%] bg-white rounded-lg z-20 absolute p-4"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-[26px] font-bold my-3 text-center">
          Cập Nhật Khóa Học
        </h1>

        <div>
          <label className="block font-medium text-gray-700 text-2xl">
            Tên Khóa Học<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nameCourse"
            value={updateData.nameCourse}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Mã Khóa Học<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="courseCode"
            value={updateData.courseCode}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Chuyên Ngành<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="category"
            value={updateData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Giảng Viên<span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="instructor"
            value={updateData.instructor}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Ngày Bắt Đầu<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="startDate"
            value={updateData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Ngày Kết Thúc<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="endDate"
            value={updateData.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Số Giờ Học Dự Kiến<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="durationHours"
            value={updateData.durationHours}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Loại Hình Thức Khóa Học<span className="text-red-500">*</span>
          </label>
          <select
            name="courseType"
            value={updateData.courseType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            {/* Add specific options here */}
          </select>
        </div>
        <button
          type="button"
          className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700 text-2xl"
          onClick={() => handleSubmit()}
        >
          Cập Nhật Ngay
        </button>
      </form>
    </div>
  );
};

export default UpdateCourseModal;
