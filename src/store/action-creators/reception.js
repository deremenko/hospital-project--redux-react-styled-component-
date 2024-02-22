import { 
  loadReceptions, 
  createReception 
} from '../../services/reception.js';

import {
  getReceptions,
  getReceptionsSuccess,
  getReceptionsError,
  addReception,
  addReceptionSuccess,
  addReceptionError,
} from '../actions/reception.js';


const fetchReceptions = () => async (dispatch) => {
  try {
    dispatch(getReceptions());
    
    const response = await loadReceptions();
    dispatch(getReceptionsSuccess(response));
  } catch (error) {
    dispatch(getReceptionsError(error.message));
  }
};

const submitReception = (reception) => async (dispatch) => {
  try {
    dispatch(addReception());
    const response = await createReception(reception);
    dispatch(addReceptionSuccess(response));
  } catch (error) {
    dispatch(addReceptionError(error.message));
  }
};

const actionCreators = { 
  fetchReceptions, 
  submitReception 
};

export default actionCreators;