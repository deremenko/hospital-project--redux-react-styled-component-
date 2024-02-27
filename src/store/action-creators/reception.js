import { 
  loadReceptions, 
  createReceptionAPI,
  editReceptionAPI 
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
    const response = await createReceptionAPI(reception);
    dispatch(addReceptionSuccess(response));
  } catch (error) {
    dispatch(addReceptionError(error.message));
  }
};

export const changeReception = (reception, updateReceptions, id) => async (dispatch) => {
  try {
    dispatch(editReception());
    await editReceptionAPI(reception, id);
    dispatch(editReceptionSuccess(updateReceptions));
  } catch (error) {
    dispatch(editReceptionError(error.message));
  }
};