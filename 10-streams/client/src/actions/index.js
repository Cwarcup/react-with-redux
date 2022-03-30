// contains all action creators
import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// attempt to make request to API server to create a new stream
export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues); // second argument is the data we want to send to the server

  dispatch({ type: 'CREATE_STREAM', payload: response.data });
};
