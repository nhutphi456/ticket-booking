import React from "react";
import useMobile from "../../../hooks/useMobile";
import { ICinemaComplex, IShowTime } from "../../../models/theater";
import MovieShowTimeItem from "./show-time-cinema-tab-item";
import CinemaLabel from "./show-time-cinema-tab-label";
import * as Styled from "./styled";

interface Props {
  cumRap: any;
  maHeThongRap: string;
  lichChieu: IShowTime[];
}
const CinemaTabs = ({ cumRap, maHeThongRap, lichChieu }: Props) => {
  const isMobile = useMobile()
  return (
    <Styled.CinemaTabs
      defaultActiveKey="1"
      items={(cumRap as any).map((cinema: ICinemaComplex, key: number) => {
        return {
          label: (
            <CinemaLabel
              data={{ cinema: cinema, maHeThongRap: maHeThongRap }}
            />
          ),
          key: key + 1,
          children: lichChieu[0].lstCumRap.map((complex, idx) => {
            if (complex.maCumRap !== cinema.maCumRap) return <React.Fragment key={idx}></React.Fragment>;
            return complex.danhSachPhim.map((film: any, i: number) => (
              <MovieShowTimeItem film={film} key={i} />
            ));
          }),
        };
      })}
      tabPosition={!isMobile ? "left" : "top"}
    />
  );
};

export default CinemaTabs;
