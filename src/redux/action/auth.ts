import { ILoginUser } from "../../models/user";
import { authApi } from "../../services/auth";

export const login = async (values: ILoginUser, { rejectWithValue }: any) => {
  try {
    const res = await authApi.login(values);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
};
