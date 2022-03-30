import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { EDIT_STREAM } from '../actions/types';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});

const streamReducer = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // const newState = { ...state };           // old way
      // newState[action.payload.id] = action.payload;
      // return newState;

      return { ...state, [action.payload.id]: action.payload }; // ES6 way, this is known as key interpolation
    default:
      return state;
  }
}