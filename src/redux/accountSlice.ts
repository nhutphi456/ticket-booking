import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAccountInfo,
  IAccountParams,
  IAccountUpdateParams,
  IAccountUpdateSuccess,
} from "../models/account";
import { getAccountInfo, updateAccount } from "./action/account";

interface AccountState {
  loading: boolean;
  updateLoading: boolean;
  data: IAccountInfo | null;
  updateSuccessData: IAccountUpdateSuccess | null;
}

const initialState: AccountState = {
  loading: false,
  updateLoading: false,
  data: null,
  updateSuccessData: null,
};

export const getAccountDetailAction = createAsyncThunk(
  "account/getDetail",
  async (params: IAccountParams, { rejectWithValue }) =>
    await getAccountInfo(params, { rejectWithValue })
);

export const updateAccountAction = createAsyncThunk(
  "account/update",
  async (params: IAccountUpdateParams, { rejectWithValue }) =>
    await updateAccount(params, { rejectWithValue })
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: {
    [getAccountDetailAction.pending.type]: (state) => {
      state.loading = true;
    },
    [getAccountDetailAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    [getAccountDetailAction.rejected.type]: (state) => {
      state.loading = false;
      state.data = null;
    },
    [updateAccountAction.pending.type]: (state) => {
      state.updateLoading = true;
      state.updateSuccessData = null;
    },
    [updateAccountAction.fulfilled.type]: (state, action) => {
      state.updateLoading = false;
      state.updateSuccessData = action.payload.data;
    },
    [updateAccountAction.rejected.type]: (state) => {
      state.updateLoading = false;
      state.updateSuccessData = null;
    },
  },
});

export default accountSlice.reducer;
