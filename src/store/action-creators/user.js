import { registerUser } from '../../services/user.js';
import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
} from '../actions/user.js';

export const registration = (objectData) => async (dispatch) => {
  try {
    dispatch(submitRegistration());
    
    const response = await registerUser(objectData);
    localStorage.setItem("token", response.data.accessToken)

    dispatch(submitRegistrationSuccess(response));
  } catch (error) {
    dispatch(submitRegistrationError(error.message));
  }
};