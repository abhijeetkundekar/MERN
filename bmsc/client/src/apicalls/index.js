import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
  }
});

// Interceptor to add token to requests
axiosInstance.interceptors.request.use(function (request) {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
}, function (error) {
  return Promise.reject(error);
});