import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginUser } from "../models/user";
import { authApi } from "../services/auth";
import { login } from "./action/auth";

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
  async (params: ILoginUser, { rejectWithValue }) =>
    await login(params, { rejectWithValue })
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => {
      return initialState;
    },
    syncLogin: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
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

export const { logoutAction, syncLogin } = authSlice.actions;

export default authSlice.reducer;
