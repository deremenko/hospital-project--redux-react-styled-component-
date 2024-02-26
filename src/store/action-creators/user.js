import { 
  registerUser, 
  authorizationUser, 
  logoutUser,
} from '../../services/user.js';

import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
  submitAuthorization,
  submitAuthorizationSuccess,
  submitAuthorizationError,
  submitDeauthorization,
  submitDeauthorizationSuccess,
  submitDeauthorizationError,
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

export const deauthorizationUser = () => async (dispatch) => {
  try {
    dispatch(submitDeauthorization());
    
    await logoutUser();
    localStorage.removeItem("token");
    dispatch(submitDeauthorizationSuccess());
  } catch (error) {
    dispatch(submitDeauthorizationError(error.message));
  }
};

