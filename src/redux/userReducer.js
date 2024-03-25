import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setUser, setLoading, setError } = authSlice.actions;

export const loginAsync = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const token = await login(username, password);
    dispatch(setToken(token));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export default authSlice.reducer;
