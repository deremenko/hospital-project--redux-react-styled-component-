import { sendRegistrationForm } from '../../services/registaration.js';
import {
  sendObjectRequest,
  sendObjectSuccess,
  sendObjectError,
} from '../actions/registration.js';

export const sendObject = (objectData) => async (dispatch) => {
  try {
    dispatch(sendObjectRequest());

    const response = await sendRegistrationForm(objectData);

    dispatch(sendObjectSuccess(response));
  } catch (error) {
    dispatch(sendObjectError(error.message));
  }
};