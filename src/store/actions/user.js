import { 
  SUBMIT_REGISTRATION , 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  SUBMIT_DEAUTHORIZATION,
  SUBMIT_DEAUTHORIZATION_SUCCESS,
  SUBMIT_DEAUTHORIZATION_ERROR
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

export const submitDeauthorization  = () => ({
  type: SUBMIT_DEAUTHORIZATION,
});

export const submitDeauthorizationSuccess = () => ({
  type: SUBMIT_DEAUTHORIZATION_SUCCESS,
});

export const submitDeauthorizationError = (error) => ({
  type: SUBMIT_DEAUTHORIZATION_ERROR,
  error,
});

