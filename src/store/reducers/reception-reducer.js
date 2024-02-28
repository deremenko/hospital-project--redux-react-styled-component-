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

const initialState = {
  error: null,
  receptions: [],
};

const receptionReducer = (state = initialState, action) => {
  switch (action.type) {
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
      return {
        ...state,
        error: action.error,
      };
    
    case EDIT_RECEPTION:
      return {
        ...state,
        error: null,
      };
    
    case EDIT_RECEPTION_SUCCESS:
      return {
        ...state,
        error: null,
        receptions: state.receptions.map(reception =>
          reception._id === action.payload._id ? action.payload : reception
        ),
      };

    case EDIT_RECEPTION_ERROR:
      return {
        ...state,
        error: action.error,
      };   
      
    case DELETE_RECEPTION:
      return {
        ...state,
        error: null,
      };
    
    case DELETE_RECEPTION_SUCCESS:
      return {
        ...state,
        error: null,
        receptions: state.receptions.filter(reception => 
          reception._id !== action.payload._id
        ),
      };

    case DELETE_RECEPTION_ERROR:
      return {
        ...state,
        error: action.error,
      };    

    default:
      return state;
  }
};

export default receptionReducer;