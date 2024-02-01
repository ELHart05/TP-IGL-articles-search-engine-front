import axios from "axios";
import { SERVER_URL } from "../../constants";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: SERVER_URL[import.meta.env.VITE_ENVIRONMENT],
  timeout: 12000,
  withCredentials: true
});

// Add a request interceptor to add the token to each request
API.interceptors.request.use(async (config) => {
  // Retrieve the token from the cache or React.js authentication
  const accessToken = Cookies.get("PHaccessToken");
  // If the token exists, add it to the Authorization header
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default API;
