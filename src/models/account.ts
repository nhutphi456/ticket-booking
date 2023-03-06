export interface IAccountParams {
  taiKhoan: string;
}

export interface IAccountUpdateParams {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDt: string;
  maNhom: string;
  maLoaiNguoiDung: string;
}

export interface IAccountUpdateSuccess {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  loaiNguoiDung: string;
  thongTinDatVe: null;
}

export interface IAccountInfo {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  loaiNguoiDung: string | null;
  thongTinDatVe: IBookingHistory[];
}

export interface IBookingHistory {
  maVe: number;
  ngayDat: string;
  tenPhim: string;
  giaVe: number;
  thoiLuongPhim: number;
  danhSachGhe: ISeatInfo[];
}

export interface ISeatInfo {
  maHeThongRap: string;
  tenHeThongRap: string;
  maCumRap: string;
  tenCumRap: string;
  maRap: number;
  tenRap: string;
  maGhe: number;
  tenGhe: string;
}
