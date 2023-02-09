export interface IMovieItem {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
}

export interface IMovieDetail {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  lichChieu: IShowTimeDetail[];
}

export interface IShowTimeDetail {
  maLichChieu: number;
  maRap: number;
  maPhim: number;
  tenPhim: string;
  ngayChieuGioChieu: string;
  giaVe: number;
  thoiLuong: number;
  thongTinRap: {
    maRap: number;
    tenRap: string;
    maCumRap: string;
    tenCumRap: string;
    maHeThongRap: string;
    tenHeThongRap: string;
  };
}
