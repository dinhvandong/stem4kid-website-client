import { useState } from "react";

const EditForm = ({ record, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: record.fullName,
    phoneNumber: record.phoneNumber,
    address: record.address,
    timeRegistered: record.timeRegistered,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave({ ...record, ...formData });
  };

  return (
    <div>
      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <label>Time Registered:</label>
      <input
        type="text"
        name="timeRegistered"
        value={formData.timeRegistered}
        onChange={handleChange}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditForm;
