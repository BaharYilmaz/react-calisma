import { createSlice } from "@reduxjs/toolkit";

const initialPostState = {
  loading: false,
  entities: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    catchError: (state) => {
      state.loading = false;
    },
    startCall: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      state.loading = false;
      state.entities = action.payload.post;
    }
  }
});