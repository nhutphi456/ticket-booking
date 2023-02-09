import { httpClient } from "../util/httpClient";

const URL = "/QuanLyPhim";
const movieApi = {
  getList: () => {
    return httpClient.get(`${URL}/LayDanhSachPhim`, {
      params: {
        maNhom: "GP09",
      },
    });
  },
  getDetail: (id: number) => {
    return httpClient.get(`${URL}/LayThongTinPhim`, {
      params: {
        maPhim: id
      }
    })
  }
};

export { movieApi };
