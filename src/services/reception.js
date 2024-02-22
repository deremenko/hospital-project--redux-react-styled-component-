import { API_URL } from "../constants"
import api from "../http";

export const loadReceptions = async () => {
  const response = await api.get(`${API_URL}/reception`);
  return response.data;
};

export const createReception = async (reception) => {
  const response = await api.post(`${API_URL}/reception`, reception);
  return response.data;
};
