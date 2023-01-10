import { ETheaterSystemCode } from "../models/theater";

export const getTheaterClass = (theaterCode: string) => {
  switch (theaterCode) {
    case ETheaterSystemCode.BHDStar:
      return "bhd-star";
    case ETheaterSystemCode.CGV:
      return "cgv";
    case ETheaterSystemCode.CineStar:
      return "cinestar";
    case ETheaterSystemCode.Galaxy:
      return "galaxy";
    case ETheaterSystemCode.LotteCinima:
      return "lotte";
    case ETheaterSystemCode.MegaGS:
      return "mega-gs";
    default:
      return "";
  }
};
