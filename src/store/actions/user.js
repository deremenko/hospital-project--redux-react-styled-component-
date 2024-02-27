import { 
  SUBMIT_REGISTRATION , 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  START_DEAUTHORIZATION,
  DEAUTHORIZATION_SUCCESS,
  SHOW_DEAUTHORIZATION_ERROR
} from "../enums/user.js"

export const submitRegistration  = () => ({
  type: SUBMIT_REGISTRATION,
});

export const submitRegistrationSuccess = (payload) => ({
  type: SUBMIT_REGISTRATION_SUCCESS,
  payload,
});

export const submitRegistrationError = (error) => ({
  type: SUBMIT_REGISTRATION_ERROR,
  error,
});

export const submitAuthorization  = () => ({
  type: SUBMIT_AUTHORIZATION,
});

export const submitAuthorizationSuccess = () => ({
  type: SUBMIT_AUTHORIZATION_SUCCESS,
});

export const submitAuthorizationError = (error) => ({
  type: SUBMIT_AUTHORIZATION_ERROR,
  error,
});

export const startDeauthorization  = () => ({
  type: START_DEAUTHORIZATION,
});

export const deauthorizationSuccess = () => ({
  type: DEAUTHORIZATION_SUCCESS,
});

export const showDeauthorizationError = (error) => ({
  type: SHOW_DEAUTHORIZATION_ERROR,
  error,
});

