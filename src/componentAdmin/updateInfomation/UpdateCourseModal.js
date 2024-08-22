import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateCourseModal = () => {
  const [formData, setFormData] = useState({
    nameCourse: "",
    courseCode: "",
    category: "",
    instructor: "",
    startDate: "",
    endDate: "",
    durationHours: "",
    courseType: "",
  });

  const handleChangeNameCourse = (e) => {
    const { value } = e?.target;
    setFormData({
      ...formData,
      nameCourse: value,
    });
  };

  const handleChangeCourseCode = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      courseCode: value,
    });
  };

  const handleChangeCategory = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleChangeInstructor = (e) => {
    const { value } = e?.target;
    setFormData({
      ...formData,
      instructor: value,
    });
  };

  const handleChangeStartDate = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      startDate: value,
    });
  };

  const handleChangeEndDate = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      endDate: value,
    });
  };

  const handleChangeDurationHours = (e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      durationHours: value,
    });
  };

  const handleChangeCourseType = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      courseType: value,
    });
  };
  const navigate = useNavigate();
  const goToCourse = () => {
    navigate("/admin/course");
  };
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/api/course/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    goToCourse();
    console.log(data);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center text-2xl ">
      <form onSubmit={handleSubmit} className=" w-[60%] bg-slate-50 rounded-lg">
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
            value={formData.nameCourse}
            onChange={handleChangeNameCourse}
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
            value={formData.courseCode}
            onChange={handleChangeCourseCode}
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
            value={formData.category}
            onChange={handleChangeCategory}
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
            value={formData.instructor}
            onChange={handleChangeInstructor}
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
            value={formData.startDate}
            onChange={handleChangeStartDate}
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
            value={formData.endDate}
            onChange={handleChangeEndDate}
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
            value={formData.durationHours}
            onChange={handleChangeDurationHours}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Loại Hình Thức Khóa Học<span className="text-red-500">*</span>
          </label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChangeCourseType}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            Add specific options here
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
