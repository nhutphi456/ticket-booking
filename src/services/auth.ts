import { ILoginUser, ISingupUser } from "../models/user";
import { httpClient } from "../util/httpClient";

const URL = "/QuanLyNguoiDung";
const authApi = {
  login: (params: ILoginUser) => {
    return httpClient.post(`${URL}/DangNhap`, params);
  },
  signup: (params: ISingupUser) => {
    return httpClient.post(`${URL}/DangKy`, params);
  },
};

export { authApi };
