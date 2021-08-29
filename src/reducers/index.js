import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';


// Combine all reducers so we can have onename in store
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;