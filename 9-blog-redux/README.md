# Blog

Two Components:
  - PostList: renders the entire list of blog posts.
  - UserHeader: renders the author name.

Blog details will use [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

Axios is used to make HTTP requests.

```
npm install --save redux react-redux axios redux-thunk
```

redux: for redux library.
react-redux: integration between react and redux library.
axios: Helps us make network requests.
redux-thunk: Middleware to help us make network requests in a redux application. 

# Summary

Inside root index.js, we import the redux library and the redux-thunk middleware. 

Connected redux-thunk to our store using `applyMiddleware`.

`const store = createStore(reducers, applyMiddleware(thunk));`

When we apply the thunk middleware, anytime we dispatch an action, the action will be first sent to Redux-Thunk, modified if it's a function, then passes the action to the reducers as an action object. 

Now in our action creators, we no longer NEEDED to create creators that ONLY returned action objects. We could now return a function. We do this when making an API request in our action creators.

```js
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
```

We created an action creator which calls other action creators. We `dispatched` the result of those other action creators once they are finished making the API request. 

```js
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //call `fetchPosts`, need await to wait for `fetchPosts` to finish
  _.chain(getState().posts) // get the posts from the state
    .map('userId') // get the userIds from the posts
    .uniq() // get list of unique userIds from posts using lodash
    .forEach((id) => dispatch(fetchUser(id))) // iterate over userIds and call `fetchUser` for each userId
    .value(); // execute the chain method
};
```

Reducers: Learnt the first argument refers to the `state` and it is whatever was returned from the previous state.
Usually make use of the `switch` statement.
Learnt that a reducer must ALWAYS return a **new** array or object. Should not mutate the previous state.

see notes such as:
- [api requests with redux](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/api-request-redux.md)
- [redux thunk](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/redux-thunk.md)
- [lodash](https://github.com/Cwarcup/notes/blob/main/root/Library/Lodash.md)