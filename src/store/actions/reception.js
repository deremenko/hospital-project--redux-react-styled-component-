import { 
  GET_RECEPTIONS,
  GET_RECEPTIONS_SUCCESS,
  GET_RECEPTIONS_ERROR,
  ADD_RECEPTION,
  ADD_RECEPTION_SUCCESS,
  ADD_RECEPTION_ERROR,
  EDIT_RECEPTION,
  EDIT_RECEPTION_SUCCESS,
  EDIT_RECEPTION_ERROR,
  DELETE_RECEPTION,
  DELETE_RECEPTION_SUCCESS,
  DELETE_RECEPTION_ERROR, 
} from "../enums/reception.js"

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

export const editReception  = () => ({
  type: EDIT_RECEPTION,
});

export const editReceptionSuccess = (payload) => ({
  type: EDIT_RECEPTION_SUCCESS,
  payload,
});

export const editReceptionError = (error) => ({
  type: EDIT_RECEPTION_ERROR,
  error,
});

export const deleteReception  = () => ({
  type: DELETE_RECEPTION,
});

export const deleteReceptionSuccess = (payload) => ({
  type: DELETE_RECEPTION_SUCCESS,
  payload,
});

export const deleteReceptionError = (error) => ({
  type: DELETE_RECEPTION_ERROR,
  error,
});