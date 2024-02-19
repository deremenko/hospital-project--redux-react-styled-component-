import { registerUser } from '../../services/user.js';
import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
} from '../actions/user.js';

const registration = (newUser) => async (dispatch) => {
  try {
    dispatch(submitRegistration());
    
    const response = await registerUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitRegistrationSuccess(response.user));
  } catch (error) {
    dispatch(submitRegistrationError(error.message));
  }
};

const actionCreators = { registration };

export default actionCreators;