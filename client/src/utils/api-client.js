import axios from "axios";
import Cookie from "js-cookie";
import { SERVER_URL } from "../../constants";

let refresh = false;

const API = axios.create({
  baseURL: SERVER_URL[import.meta.env.VITE_ENVIRONMENT],
  timeout: 12000
});

API.interceptors.request.use(async (config) => {
  // intercept axios request set user cookies in the header
  const accessCookie = Cookie.get("accessToken");
  if (accessCookie) {
    config.headers.Authorization = `Bearer ${accessCookie}`;
  }
  return config;
});

API.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      console.log(localStorage.getItem('refresh_token'));

      try {
        const response = await axios.post(
          'http://localhost:8000/token/refresh/',
          {
            refresh: localStorage.getItem('refresh_token'),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          API.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);

          // Retry the original request
          return API(error.config);
        }
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        // Handle token refresh failure
        // You may want to redirect to the login page or handle it in some way
      } finally {
        refresh = false;
      }
    }

    // If not a 401 error or token refresh fails, return the original error
    return Promise.reject(error);
  }
);

export default API;
