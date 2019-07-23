import { FETCH_POSTS, NEW_POST, REMOVE_POST, UPDATE_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const deletePost = (id) => dispatch => {
  console.log("calling delete action");
  console.log(id);
   fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'DELETE'})
      .then(res=>console.log(res)
      )
        dispatch({
          type: REMOVE_POST,
          id: id
        })		
};

export const updatePost = (id) => dispatch => {
  console.log("calling update action");
  console.log(id);
   fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'PUT'})
      .then(res=>console.log(res)
      )
        dispatch({
          type: UPDATE_POST,
          id: id
        })		
};