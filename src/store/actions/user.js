import { 
  SUBMIT_REGISTRATION , 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR 
} from "../enums/user.js"

export const submitRegistration  = () => ({
  type: SUBMIT_REGISTRATION,
});

export const submitRegistrationSuccess = (user) => ({
  type: SUBMIT_REGISTRATION_SUCCESS,
  payload: {
    user,
  },
});

export const submitRegistrationError = (error) => ({
  type: SUBMIT_REGISTRATION_ERROR,
  error,
});