// vendor imports
import { combineReducers } from 'redux';
// reducers
import authReducer from './auth';
import casesReducer from './cases';

export default combineReducers({
    authReducer,
    casesReducer
});