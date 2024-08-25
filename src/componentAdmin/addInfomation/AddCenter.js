import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCenter = ({ center }) => {
  const [formData, setFormData] = useState({
    facilityName: "",
    location: "",
    capacity: "",
    currentUsage: "",
    numberOfClassrooms: "",
    openHours: "",
    closeHours: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const goToCourse = () => {
    navigate("/admin/center");
  };
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8080/api/center/create", {
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
        <h1 className="text-[26px] font-bold my-3 text-center">Thêm Cơ Sở</h1>

        <div>
          <label className="block font-medium text-gray-700 text-2xl">
            Tên Cơ Sở<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="facilityName"
            value={formData.facilityName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Địa Điểm<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Sức Chứa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Số Lượng Sử Dụng Cơ Sở Hiện Tại
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="currentUsage"
            value={formData.currentUsage}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Số Lượng Phòng Học<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="numberOfClassrooms"
            value={formData.numberOfClassrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Giờ Mở Cửa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="openHours"
            value={formData.openHours}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 text-2xl">
            Giờ Đóng Cửa<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="closeHours"
            value={formData.closeHours}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
        <button
          type="button"
          className="w-full bg-orange-400 text-white p-2 rounded hover:bg-orange-700 text-2xl"
          onClick={() => handleSubmit()}
        >
          Thêm Ngay
        </button>
      </form>
    </div>
  );
};

export default AddCenter;
