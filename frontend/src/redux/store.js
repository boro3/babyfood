// vendor imports
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// reducers
import combine from './ducks';

const middleware = applyMiddleware(thunk,createLogger());
export default createStore(combine, middleware);
