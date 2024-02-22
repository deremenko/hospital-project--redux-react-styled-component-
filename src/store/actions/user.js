import { 
  SUBMIT_REGISTRATION , 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  GET_RECEPTIONS,
  GET_RECEPTIONS_SUCCESS,
  GET_RECEPTIONS_ERROR,
  ADD_RECEPTION,
  ADD_RECEPTION_SUCCESS,
  ADD_RECEPTION_ERROR
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

export const getReceptions  = () => ({
  type: GET_RECEPTIONS,
});

export const getReceptionsSuccess = (payload) => ({
  type: GET_RECEPTIONS_SUCCESS,
  payload,
});

export const getReceptionsError = (error) => ({
  type: GET_RECEPTIONS_ERROR,
  error,
});

export const addReception  = () => ({
  type: ADD_RECEPTION,
});

export const addReceptionSuccess = (payload) => ({
  type: ADD_RECEPTION_SUCCESS,
  payload,
});

export const addReceptionError = (error) => ({
  type: ADD_RECEPTION_ERROR,
  error,
});