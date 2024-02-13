import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const sendRegistrationForm = async (objectData) => {
  try {
    const response = await axios.post(`${API_URL}/user/registration`, objectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
