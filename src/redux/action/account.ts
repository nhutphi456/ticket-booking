import { IAccountParams, IAccountUpdateParams } from "../../models/account";
import { accountApi } from "../../services/account";

export const getAccountInfo = async (
  params: IAccountParams,
  { rejectWithValue }: any
) => {
  try {
    const res = await accountApi.getAccountInfo(params);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
};

export const updateAccount = async (
  params: IAccountUpdateParams,
  { rejectWithValue }: any
) => {
  try {
    const res = await accountApi.updateAccount(params);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
};
