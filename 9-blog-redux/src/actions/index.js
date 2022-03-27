import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// fetchPostsAndUsers() will...
//   - call `fetchPosts`
//   - get a list of posts
//   - find all unique `userId`s from the posts
//   - iterate over unique `usrId`s and call `fetchUser` for each userId

export const fetchPostsAndUsers = () => async (dispatch) => {
  console.log('About to fetchPostsAndUsers');
  await dispatch(fetchPosts());
  console.log('fetchPostsAndUsers');
};

// fetch multiple posts from jsonPlaceholder
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// fetch one individual user at a time from jsonPlaceholder

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
