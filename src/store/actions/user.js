import { 
  SUBMIT_REGISTRATION , 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  CONFIRM_DEAUTHORIZATION,
  CONFIRM_DEAUTHORIZATION_SUCCESS,
  CONFIRM_DEAUTHORIZATION_ERROR
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

export const confirmDeauthorization  = () => ({
  type: CONFIRM_DEAUTHORIZATION,
});

export const confirmDeauthorizationSuccess = () => ({
  type: CONFIRM_DEAUTHORIZATION_SUCCESS,
});

export const confirmDeauthorizationError = (error) => ({
  type: CONFIRM_DEAUTHORIZATION_ERROR,
  error,
});

