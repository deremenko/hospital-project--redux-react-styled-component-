import { 
  loadReceptions, 
  createReceptionAPI 
} from '../../services/reception.js';

import {
  getReceptions,
  getReceptionsSuccess,
  getReceptionsError,
  addReception,
  addReceptionSuccess,
  addReceptionError,
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