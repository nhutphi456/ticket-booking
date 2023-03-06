import { IAccountParams, IAccountUpdateParams } from "../models/account";
import { httpClient } from "../util/httpClient";

const URL = "/QuanLyNguoiDung";
const accountApi = {
  getAccountInfo: (params: IAccountParams) => {
    return httpClient.post(`${URL}/ThongTinTaiKhoan`, params);
  },
  updateAccount: (params: IAccountUpdateParams) => {
    return httpClient.put(`${URL}/CapNhatThongTinNguoiDung`, params);
  },
};

export { accountApi };
