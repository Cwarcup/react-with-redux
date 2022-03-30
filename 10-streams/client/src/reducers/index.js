import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { EDIT_STREAM } from '../actions/types';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
