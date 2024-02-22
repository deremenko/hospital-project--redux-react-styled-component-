import { 
  SUBMIT_REGISTRATION, 
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

const initialState = {
  user: {},
  error: null,
  isAuth: false,
  receptions: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      return {
        ...state,
        error: null,
      };

    case SUBMIT_REGISTRATION_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.payload,
        isAuth: true,
      };

    case SUBMIT_REGISTRATION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case SUBMIT_AUTHORIZATION:
      return {
        ...state,
        error: null,
      };

    case SUBMIT_AUTHORIZATION_SUCCESS:
      return {
        ...state,
        error: null,
        isAuth: true,
      };

    case SUBMIT_AUTHORIZATION_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case GET_RECEPTIONS:
      return {
        ...state,
        error: null,
      };

    case GET_RECEPTIONS_SUCCESS:
      return {
        ...state,
        error: null,
        receptions: action.payload,
      };

    case GET_RECEPTIONS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case ADD_RECEPTION:
      return {
        ...state,
        error: null,
      };
    
    case ADD_RECEPTION_SUCCESS:
      return {
        ...state,
        error: null,
        receptions: [...state.receptions, action.payload],
      };

    case ADD_RECEPTION_ERROR:
      console.log(action.error)
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;