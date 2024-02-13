import { 
  SEND_REGISTRATION_FORM, 
  SEND_REGISTRATION_FORM_SUCCESS, 
  SEND_REGISTRATION_FORM_ERROR 
} from "../enums/registration.js"

const initialState = {
  registrationForm: [],
  error: null,
};

const reducerRegistration = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REGISTRATION_FORM:
      return {
        ...state,
        error: null,
      };

    case SEND_REGISTRATION_FORM_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null,
      };

    case SEND_REGISTRATION_FORM_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducerRegistration;