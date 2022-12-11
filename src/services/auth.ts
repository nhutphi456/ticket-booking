import { ILoginUser } from "../models/user";
import { httpClient } from "../util/httpClient";

const authApi = {
    login: (params: ILoginUser) => {
        return httpClient.post('/QuanLyNguoiDung/DangNhap', params)
    }
};

export { authApi };
