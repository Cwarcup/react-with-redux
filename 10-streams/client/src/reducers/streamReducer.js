/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types'


export default (state = {}, action) => {
  switch (action.type) {

  case FETCH_STREAM:
    return { ...state, [action.payload.id]: action.payload };  //ES6 way of adding a new key to an object

  case CREATE_STREAM:
    return {...state, [action.payload.id]: action.payload}

  case EDIT_STREAM:
    return {...state, [action.payload.id]: action.payload}
  
  case DELETE_STREAM:
    return _.omit(state, action.payload);

  default:
    return state
  }
}
