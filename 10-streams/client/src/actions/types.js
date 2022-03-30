// can create variables to represent the different types of actions.
// no longer using strings in our actual actions to represent the type of action.

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CREATE_STREAM = 'CREATE_STREAM'; // create stream, add to db.
export const FETCH_STREAMS = 'FETCH_STREAMS'; // get a list of all streams
export const FETCH_STREAM = 'FETCH_STREAM';   // get a single stream
export const DELETE_STREAM = 'DELETE_STREAM'; // delete a stream
export const EDIT_STREAM = 'EDIT_STREAM';     // edit a stream