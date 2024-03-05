import { API_URL } from "../constants"
import api from "../http";

export const registerUser = async (user) => {
  const response = await api.post(`${API_URL}/user/registration`, user);
  return response.data;
};

export const authorizationUser = async (user) => {
  const response = await api.post(`${API_URL}/user/login`, user);
  return response.data;
};

export const refresh = async () => {
  const response = await api.get(`${API_URL}/user/refresh`);
  return response.data;
};

export const logoutUser  = async () => {
  const response = await api.get(`${API_URL}/user/logout`, { withCredentials: true });
  return response.data;
};
