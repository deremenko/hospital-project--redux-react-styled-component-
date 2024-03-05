import axios from "axios";
import { refresh } from "../services/user"
import { API_URL } from "../constants";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use((config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && error.config._isRetry) {
      originalRequest._isRetry = true;
      try {      
        const newToken = await refresh();
        localStorage.setItem('token', newToken);
  
        return api.request(originalRequest);
      } catch (error) {
        throw error;
      }
    }
  }
);

export default api;