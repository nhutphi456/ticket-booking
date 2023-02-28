import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginUser, ISingupUser } from "../models/user";
import { login, signup } from "./action/auth";

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  user: any;
  errorMessage: string;
  signUpLoading: boolean;
  signUpErrorMessage: string;
  successSignUpUser: any;
}

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  errorMessage: "",
  signUpLoading: false,
  signUpErrorMessage: "",
  successSignUpUser: null,
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (params: ILoginUser, { rejectWithValue }) =>
    await login(params, { rejectWithValue })
);

export const signUpAction = createAsyncThunk(
  "auth/signup",
  async (params: ISingupUser, { rejectWithValue }) =>
    await signup(params, { rejectWithValue })
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
    [loginAction.rejected.type]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.errorMessage = action.payload.response.data;
    },
    [signUpAction.pending.type]: (state) => {
      state.signUpLoading = true;
    },
    [signUpAction.fulfilled.type]: (state, action) => {
      state.signUpLoading = false;
      state.successSignUpUser = action.payload.data;
    },
    [signUpAction.rejected.type]: (state, action) => {
      state.signUpLoading = false;
      state.errorMessage = action.payload.response.data;
    },
  },
});

export const { logoutAction, syncLogin } = authSlice.actions;

export default authSlice.reducer;
