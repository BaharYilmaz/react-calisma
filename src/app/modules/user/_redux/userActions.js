import { userSlice } from "./userSlice";
import * as requestFromServer from "./userCrud";

const { actions } = userSlice

export const fetchUsers = () => dispatch => {
  dispatch(actions.startCall({}));
  return requestFromServer
    .getUsers()
    .then(response => {
      const { data } = response.data;
      dispatch(actions.usersFetched({ users: data }))
    })
    .catch(error => {
      dispatch(actions.catchError({ error }))
    });
};

export const fetchUser = ({ userId }) => dispatch => {
  dispatch(actions.startCall({}));
  return requestFromServer
    .getUser(userId)
    .then(response => {
      const user = response.data;
      dispatch(actions.userFetched({ user }))
    })
    .catch(error => {
      dispatch(actions.catchError({ error }))
    });
};