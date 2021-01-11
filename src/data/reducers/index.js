import { combineReducers } from 'redux';
// Reducers
import authReducer from './authReducer';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({ authReducer, notesReducer });

export default rootReducer;
