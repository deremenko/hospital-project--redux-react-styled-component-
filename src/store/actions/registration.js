import { 
  SEND_REGISTRATION_FORM, 
  SEND_REGISTRATION_FORM_SUCCESS, 
  SEND_REGISTRATION_FORM_ERROR 
} from "../enums/registration.js"

export const sendObjectRequest  = () => ({
  type: SEND_REGISTRATION_FORM,
});

export const sendObjectSuccess = (payload) => ({
  type: SEND_REGISTRATION_FORM_SUCCESS,
  payload,
});

export const sendObjectError = (error) => ({
  type: SEND_REGISTRATION_FORM_ERROR,
  error,
});