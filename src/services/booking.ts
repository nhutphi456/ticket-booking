import { httpClient } from "../util/httpClient";

const URL = "/QuanLyDatVe";
const bookingApi = {
  getSeats: (showId: number) => {
    return httpClient.get(`${URL}/LayDanhSachPhongVe`, {
      params: { MaLichChieu: showId },
    });
  },
  bookTicket: (params: any) => {
    return httpClient.post(`${URL}/DatVe`, params)
  }
};

export { bookingApi };
