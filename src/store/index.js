import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import reducerRegistration from "./reducers/reducerRegistration.js";

const rootReducer = combineReducers({
  reducerRegistration,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;