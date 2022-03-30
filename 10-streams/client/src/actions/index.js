// contains all action creators
import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';
import history from '../history';

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
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth; // getState() returns the entire state of the application, including the auth object.
  const response = await streams.post('/streams', { ...formValues, userId }); // second argument is the data we want to send to the server

  dispatch({ type: CREATE_STREAM, payload: response.data }); // payload contains the data we want inside of response
  // Do some programmatic navigation to get back to the root route
  history.push('/');     // <- call push() to navigate to a new URL to navigate the user
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};
