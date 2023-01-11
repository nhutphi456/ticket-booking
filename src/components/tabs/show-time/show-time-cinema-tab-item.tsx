import { Button } from "antd";
import moment from "moment";
import React from "react";
import { useFormattedShowTime } from "../../../hooks/useFormattedShowTimes";
import ShowTimeButton from "./show-time-cinema-button";
import * as Styled from "./styled";

const MovieShowTimeItem = ({ film }: any) => {
  const { tenPhim, hinhAnh, lstLichChieuTheoPhim } = film;
  const showTimeDates = useFormattedShowTime(lstLichChieuTheoPhim);

  return (
    <Styled.MovieShowTimeItem>
      <div className="film-info">
        <div className="film-image">
          <img src={hinhAnh} alt={tenPhim} />
        </div>
        <div className="film-detail">
          <p className="film-name">{tenPhim}</p>
          <p className="film-duration">120 phút</p>
        </div>
      </div>
      <div className="film-show-time">
        {showTimeDates.map((s: any, index: number) => (
          <div key={index} className="film-show-time-item">
            <div className="show-time-date">
              {moment(s.ngayChieu).format("dddd, DD MMM YYYY")}
            </div>
            <div className="show-time-buttons">
              {s.lichChieuTheoNgay.map((lc: any, idx: number) => (
                <ShowTimeButton showTime={lc} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Styled.MovieShowTimeItem>
  );
};

export default MovieShowTimeItem;
