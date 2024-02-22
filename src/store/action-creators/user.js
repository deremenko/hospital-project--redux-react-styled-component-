import { 
  registerUser, 
  authorizationUser, 
  requestReceptions, 
  sendReception 
} from '../../services/user.js';
import {
  submitRegistration,
  submitRegistrationSuccess,
  submitRegistrationError,
  submitAuthorization,
  submitAuthorizationSuccess,
  submitAuthorizationError,
  getReceptions,
  getReceptionsSuccess,
  getReceptionsError,
  addReception,
  addReceptionSuccess,
  addReceptionError,
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

const authorization = (newUser) => async (dispatch) => {
  try {
    dispatch(submitAuthorization());
    
    const response = await authorizationUser(newUser);
    localStorage.setItem("token", response.accessToken)
    dispatch(submitAuthorizationSuccess(response.user));
  } catch (error) {
    dispatch(submitAuthorizationError(error.message));
  }
};

const loadReceptions = () => async (dispatch) => {
  try {
    dispatch(getReceptions());
    
    const response = await requestReceptions();
    dispatch(getReceptionsSuccess(response));
  } catch (error) {
    dispatch(getReceptionsError(error.message));
  }
};

const createReception = (reception) => async (dispatch) => {
  try {
    dispatch(addReception());
    console.log(reception);
    const response = await sendReception(reception);
    dispatch(addReceptionSuccess(response));
  } catch (error) {
    dispatch(addReceptionError(error.message));
  }
};

const actionCreators = { 
  registration, 
  authorization, 
  loadReceptions, 
  createReception 
};

export default actionCreators;