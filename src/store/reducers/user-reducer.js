import { 
  SUBMIT_REGISTRATION, 
  SUBMIT_REGISTRATION_SUCCESS, 
  SUBMIT_REGISTRATION_ERROR,
  SUBMIT_AUTHORIZATION,
  SUBMIT_AUTHORIZATION_SUCCESS,
  SUBMIT_AUTHORIZATION_ERROR,
  START_DEAUTHORIZATION,
  DEAUTHORIZATION_SUCCESS,
  SHOW_DEAUTHORIZATION_ERROR
} from "../enums/user.js"

const initialState = {
  user: {},
  error: null,
  isAuth: false,
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

    case START_DEAUTHORIZATION:
      return {
        ...state,
        error: null,
      };

    case DEAUTHORIZATION_SUCCESS:
      return {
        ...state,
        error: null,
        isAuth: false,
      };

    case SHOW_DEAUTHORIZATION_ERROR:
      return {
        ...state,
        error: action.error,
      };  

    default:
      return state;
  }
};

export default userReducer;