import axios from "axios";

export const ROOT_URL = "150.95.108.21";
export const API_URL_IMAGE = `http://${ROOT_URL}:8080/api/images/`;

const API_URL = `http://${ROOT_URL}:8080/api`; // Replace with your API URL
axios.defaults.baseURL = `http://${ROOT_URL}:8080`; // Replace with your backend API's base URL

// Add the following lines to set the CORS headers
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE"; // Specify the allowed HTTP methods
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, X-Requested-With, Content-Type, Accept, Authorization"; // Specify the allowed headers

export const isAuthenticated = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get(
        `${API_URL}/user/findToken?token=${token}`,
        {
          withCredentials: true,
        }
      );
      const user = response.data;
      console.log("USER:" + user);

      if (user.data) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return false;
};

export const loginRequest = async (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, data);
    console.log("login:", response);
    if (response.data.success === 200) {
      const token = response.data.message;
      localStorage.setItem("token", token);
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  //const token = localStorage.getItem("token");
  formData.append("file", file);
  const fileResponse = await axios.post(`${API_URL_IMAGE}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("fileResponse", fileResponse);
  return fileResponse.data;
};