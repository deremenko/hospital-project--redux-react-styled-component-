import { API_URL } from "../constants"
import api from "../http";

export const loadReceptions = async () => {
  const response = await api.get(`${API_URL}/reception`);
  return response.data;
};

export const createOneReception = async (reception) => {
  const response = await api.post(`${API_URL}/reception`, reception);
  return response.data;
};

export const editOneReception = async (reception, id) => {
  const response = await api.patch(`${API_URL}/reception/${id}`, reception);
  return response.data;
}; 

export const deleteOneReception = async (id) => {
  const response = await api.delete(`${API_URL}/reception/${id}`);
  return response.data;
};
