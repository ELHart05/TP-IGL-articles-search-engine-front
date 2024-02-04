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

API.interceptors.response.use(
  function (response) {
      return response;
  },
  function (error) {
      if (error?.response?.data?.code == "token_not_valid" || error?.response?.request?.responseURL?.includes('undefined')) {
        Cookies.remove('PHuser');
        Cookies.remove('PHaccessToken');
        Cookies.remove('PHrefreshToken');
        location.reload()
      }
      return error;
  }
);

export default API;
