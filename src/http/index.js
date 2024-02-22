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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const newToken = await refresh();
      localStorage.setItem('token', newToken);

      return api.request(error.config);
    }

    return Promise.reject(error);
  }
);

export default api;