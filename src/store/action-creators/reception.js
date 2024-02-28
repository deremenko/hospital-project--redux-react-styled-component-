import { 
  loadReceptions, 
  createOneReception,
  editOneReception 
} from '../../services/reception.js';

import {
  getReceptions,
  getReceptionsSuccess,
  getReceptionsError,
  addReception,
  addReceptionSuccess,
  addReceptionError,
  editReception,
  editReceptionSuccess,
  editReceptionError
} from '../actions/reception.js';


export const loadUserReceptions = () => async (dispatch) => {
  try {
    dispatch(getReceptions());
    
    const response = await loadReceptions();
    dispatch(getReceptionsSuccess(response));
  } catch (error) {
    dispatch(getReceptionsError(error.message));
  }
};

export const createReception = (reception) => async (dispatch) => {
  try {
    dispatch(addReception());
    const response = await createOneReception(reception);
    dispatch(addReceptionSuccess(response));
  } catch (error) {
    dispatch(addReceptionError(error.message));
  }
};

export const editUserReception = (reception, id) => async (dispatch) => {
  try {
    dispatch(editReception());
    const response = await editOneReception(reception, id);
    dispatch(editReceptionSuccess(response));
  } catch (error) {
    dispatch(editReceptionError(error.message));
  }
};