import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// fetchPostsAndUsers() will...
//   - call `fetchPosts`
//   - get a list of posts
//   - find all unique `userId`s from the posts
//   - iterate over unique `usrId`s and call `fetchUser` for each userId

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // call `fetchPosts`, need await to wait for `fetchPosts` to finish
  const userIds = _.uniq(_.map(getState().posts, 'userId')); // get list of unique userIds from posts using lodash
  userIds.forEach((id) => dispatch(fetchUser(id))); // iterate over userIds and call `fetchUser` for each userId
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
