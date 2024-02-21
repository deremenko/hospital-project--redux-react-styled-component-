import axios from "axios";
import { API_URL } from "../constants"

export const registerUser = async (user) => {
  const response = await axios.post(`${API_URL}/user/registration`, user);
  return response.data;
};

export const authorizationUser = async (user) => {
  const response = await axios.post(`${API_URL}/user/login`, user);
  return response.data;
};
