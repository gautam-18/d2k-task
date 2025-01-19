import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL:
    "https://d2k-static-assets.s3.ap-south-1.amazonaws.com/assignment-files/python-backend-assignment/users.json",
});

//If in future, we are going to use some APIs that require Authorization.
//so we can attach the bearer token in all the request if it's available.
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token && token !== "") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
