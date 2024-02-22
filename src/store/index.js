import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer  from "./reducers/user-reducer.js";
import receptionReducer  from "./reducers/reception-reducer.js";

const rootReducer = combineReducers({
  reception: receptionReducer,
  user: userReducer ,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;