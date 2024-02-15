import axios from "axios";
import { API_URL } from "../constants"

export const registerUser = async (objectData) => {
  const { login, password } = objectData;
  const response = await axios.post(`${API_URL}/user/registration`, {login, password});
  return response.data;
};
