import React from "react";
import { IMovieItem } from "../../models/movie";
import { PlayCircleFilled } from "@ant-design/icons";
import * as Styled from "./styled";

interface Props {
  movie: IMovieItem;
}
const MovieItem = ({ movie }: Props) => {
  const { tenPhim, hinhAnh, biDanh, trailer, danhGia } = movie;
  return (
    <Styled.MovieItem>
      <div className="movie-thumb">
        <div className="overlay">
          <div className="icon-container">
            <a href={trailer} target="_blank">
              <PlayCircleFilled className="play-icon" />
            </a>
          </div>
        </div>
        <img src={hinhAnh} alt={biDanh} />
      </div>
      <div className="movie-content">
        <h5>
          <a href="#">{tenPhim}</a>
        </h5>
        <div className="ratings">
          <div className="rating-item">
            <div className="thumb">
              <img src={"/images/rating-tomato.png"} alt="rating-tomato" />
            </div>
            <span>{danhGia * 10}%</span>
          </div>
          <div className="rating-item">
            <div className="thumb">
              <img src={"/images/rating-cake.png"} alt="rating-cake" />
            </div>
            <span>{danhGia * 10}%</span>
          </div>
        </div>
      </div>
    </Styled.MovieItem>
  );
};

export default MovieItem;
