import { combineReducers } from "@reduxjs/toolkit";
import { postSlice } from "../app/modules/post/_redux/postSlice";
import { userSlice } from "../app/modules/user/_redux/userSlice";

export const rootReducer = combineReducers({
  posts: postSlice.reducer,
  users: userSlice.reducer,
});