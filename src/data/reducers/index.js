import { combineReducers } from 'redux';
// Reducers
import authReducer from './authorization';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
