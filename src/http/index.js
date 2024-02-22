import axios from "axios";
import { API_URL } from "../constants"

const httpClient = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default httpClient;