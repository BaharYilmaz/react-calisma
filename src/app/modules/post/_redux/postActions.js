import { postSlice } from "./postSlice";
import * as requestFromServer from "./postCrud";

const { actions } = postSlice

export const fetchPosts = () => dispatch => {
  dispatch(actions.startCall({}));
  return requestFromServer
    .getPosts()
    .then(response => {
      const { data } = response.data;
      dispatch(actions.postsFetched({ post: data }))
    })
    .catch(error => {
      dispatch(actions.catchError({ error }))
    });
};