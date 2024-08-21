import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { toast } from "react-toastify";

const AddCourse = () => {
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const createCourse = async (courseData) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/course/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(courseData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to create course");
  //     }

  //     const responseData = await response.json();
  //     return responseData;
  //   } catch (error) {
  //     console.error("Error creating course:", error);
  //     return null;
  //   }
  // };

  // // Example usage of the function
  // const newCourse = {
  //   // Provide the necessary course data here
  // };

  // createCourse(newCourse).then((data) => {
  //   if (data) {
  //     console.log("Course created successfully:", data);
  //   } else {
  //     console.log("Failed to create course");
  //   }
  // });

  const handleSubmit = async (courseData) => {
    courseData.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/course/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error creating course:", error);
      return null;
    }

    // try {
    //   const data = await authService.createCourse(formData);
    //   console.log("data: ", data);
    //   toast.success("Đăng kí thành công");
    //   navigate("/loginEmployer");
    // } catch (error) {
    //   toast.error("Đăng kí thất bại");
    // }
  };

  const goToCourse = () => {
    navigate("/admin/course");
  };
  return (
    <div className="h-screen w-full flex justify-center items-center text-2xl ">
      <form onSubmit={handleSubmit} className=" w-[60%] bg-slate-50 rounded-lg">
        <h1 className="text-[26px] font-bold my-3 text-center">
          Thêm Khóa Học
        </h1>

        <div>
          <label className="block font-medium text-gray-700 text-2xl">
            Tên Khóa Học<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nameCourse"
            value={formData.nameCourse}
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
            value={formData.courseCode}
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
            value={formData.category}
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
            value={formData.instructor}
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
            value={formData.startDate}
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
            value={formData.endDate}
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
            value={formData.durationHours}
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
            value={formData.courseType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            Add specific options here
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700 text-2xl"
          onClick={goToCourse}
        >
          Thêm Ngay
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
