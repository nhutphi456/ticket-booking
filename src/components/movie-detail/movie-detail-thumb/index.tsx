import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMovieDetail } from "../../../models/movie";
import * as Styled from "./styled";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Button } from "antd";

interface Props {
  movie: IMovieDetail;
}

const MovieDetailThumb = ({ movie }: Props) => {
  return (
    <React.Fragment>
      <Styled.MovieBackground bgUrl={movie.hinhAnh}>
        <Styled.MovieDetailThumb className="container">
          {/* <Styled.MovieBackground bgUrl={movie.hinhAnh}></Styled.MovieBackground> */}
          <div className="detail-banner-wrapper">
            <Styled.MoviePoster bgUrl={movie.hinhAnh}></Styled.MoviePoster>
            <div className="detail-banner-content">
              <h3 className="movie-name">{movie.tenPhim}</h3>
              <div className="tags">
                <a href="#0">Tiếng Việt</a>
                <a href="#0">Tiếng Anh</a>
              </div>
              <div className="categories">
                <a href="#0">Kinh dị</a>
                <a href="#0">Hài hước</a>
              </div>
              <div className="duration">
                <div className="item">
                  <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                  <span>
                    {moment(movie.ngayKhoiChieu).format("DD MMM, YYYY")}
                  </span>
                </div>
                <div className="item">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  <span>120 phút</span>
                </div>
              </div>
            </div>
          </div>
        </Styled.MovieDetailThumb>
      </Styled.MovieBackground>
      <Styled.BookSection>
        <div className="container">
          <div className="booking-wrapper">
            <div className="left-side">
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img
                      src={"/images/rating-tomato.png"}
                      alt="rating-tomato"
                    />
                  </div>
                  <div className="counter">{movie.danhGia * 10}%</div>
                </div>
                <p>Tomatometer</p>
              </div>
              <div className="item">
                <div className="item-header">
                  <div className="thumb">
                    <img src={"/images/rating-cake.png"} alt="rating-cake" />
                  </div>
                  <div className="counter">{movie.danhGia * 10}%</div>
                </div>
                <p>Audience Score</p>
              </div>
            </div>
            <div className="book-btn-container">
              <a href="#showTime">
                <Button className="book-btn">Book Tickets</Button>
              </a>
            </div>
          </div>
        </div>
      </Styled.BookSection>
    </React.Fragment>
  );
};

export default MovieDetailThumb;
