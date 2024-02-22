import { API_URL } from "../constants"
import httpClient from "../http";

export const registerUser = async (user) => {
  const response = await httpClient.post(`${API_URL}/user/registration`, user);
  return response.data;
};

export const requestReceptions = async () => {
  const response = await httpClient.get(`${API_URL}/reception/`);
  return response.data;
};

export const sendReception = async (reception) => {
  const response = await httpClient.post(`${API_URL}/reception/`, reception);
  return response.data;
};

export const authorizationUser = async (user) => {
  const response = await httpClient.post(`${API_URL}/user/login`, user);
  return response.data;
};
