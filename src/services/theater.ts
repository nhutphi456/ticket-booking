import {
  ICinemaComplexParams,
  IShowtimeParams,
  ITheaterSystemParams,
} from "../models/theater";
import { httpClient } from "../util/httpClient";

const URL = "/QuanLyRap";
const theaterApi = {
  getTheaterSystem: (params: ITheaterSystemParams) => {
    return httpClient.get(`${URL}/LayThongTinHeThongRap`, { params });
  },
  getCinemaComplex: (params: ICinemaComplexParams) => {
    return httpClient.get(`${URL}/LayThongTinCumRapTheoHeThong`, { params });
  },
  getShowtime: (params: IShowtimeParams) => {
    return httpClient.get(`${URL}/LayThongTinLichChieuHeThongRap`, { params });
  },
  getDetail: (id: number) => {
    return httpClient.get(`${URL}/LayThongTinLichChieuPhim`, {
      params: {
        maPhim: id,
      },
    });
  },
};

export { theaterApi };
