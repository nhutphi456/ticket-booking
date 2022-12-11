import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginUser } from "../models/user";
import { authApi } from "../services/auth";

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  user: any;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (params: ILoginUser) => await authApi.login(params)
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => {
      return initialState;
    },
  },
  extraReducers: {
    [loginAction.pending.type]: (state) => {
      state.loading = true;
    },
    [loginAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
    },
    [loginAction.rejected.type]: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { logoutAction } = authSlice.actions;

export default authSlice.reducer;
