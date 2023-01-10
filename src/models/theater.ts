export interface ITheaterSystemParams {
  maHeThongRap?: string;
}

export interface ICinemaComplexParams {
  maHeThongRap?: string;
}

export interface IShowtimeParams {
  maHeThongRap?: string;
  maNhom?: string;
}

export enum ETheaterSystemCode {
  BHDStar = "BHDStar",
  CGV = "CGV",
  CineStar = "CineStar",
  Galaxy = "Galaxy",
  LotteCinima = "LotteCinima",
  MegaGS = "MegaGS",
}

export interface ITheater {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
  cumRap: ICinemaComplex[];
  lichChieu: IShowTime[];
}

export interface ICinemaComplex {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachRap: Array<{
    maRap: number;
    tenRap: string;
  }>;
}

export interface IShowTime {
  lstCumRap: any[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  maNhom: string;
}

export interface IFilm {

}