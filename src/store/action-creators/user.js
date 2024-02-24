import { 
  registerUser, 
  authorizationUser, 
} from '../../services/user.js';

import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
  submitAuthorization,
  submitAuthorizationSuccess,
  submitAuthorizationError,
} from '../actions/user.js';

export const registration = (newUser) => async (dispatch) => {
  try {
    dispatch(submitRegistration());
    
    const response = await registerUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitRegistrationSuccess(response.user));
  } catch (error) {
    dispatch(submitRegistrationError(error.message));
  }
};

export const authorization = (newUser) => async (dispatch) => {
  try {
    dispatch(submitAuthorization());
    
    const response = await authorizationUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitAuthorizationSuccess(response.user));
  } catch (error) {
    dispatch(submitAuthorizationError(error.message));
  }
};