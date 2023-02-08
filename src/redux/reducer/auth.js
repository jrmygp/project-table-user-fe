import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
