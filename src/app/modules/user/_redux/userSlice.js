import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  loading: false,
  entities: [],
  userDetail: undefined,
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    catchError: (state) => {
      state.loading = false;
    },
    startCall: (state) => {
      state.loading = true;
    },
    usersFetched: (state, action) => {
      state.loading = false;
      state.entities = action.payload.users;
    } ,
    userFetched: (state, action) => {
      state.loading = false;
      state.userDetail = action.payload.user;
    }
  }
});