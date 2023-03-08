import { PlayCircleFilled } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { IMovieItem } from "../../models/movie";
import * as Styled from "./styled";

interface Props {
  movie: IMovieItem;
}
const MovieItem = ({ movie }: Props) => {
  const { tenPhim, hinhAnh, trailer, danhGia, maPhim } = movie;
  return (
    <Styled.MovieItem>
      <Styled.MovieThumb className="movie-thumb" image={hinhAnh}>
        <div className="overlay">
          <div className="icon-container">
            <a href={trailer} target="_blank" rel="noreferrer"> 
              <PlayCircleFilled className="play-icon" />
            </a>
          </div>
        </div>
        {/* <img src={hinhAnh} alt={biDanh} /> */}
      </Styled.MovieThumb>
      <div className="movie-content">
        <h5>
          <Link to={`/movie/${maPhim}`}>{tenPhim}</Link>
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
