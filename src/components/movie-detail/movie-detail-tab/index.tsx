import { Tabs } from "antd";
import { IMovieDetail } from "../../../models/movie";
import MovieDetailShowTime from "./movie-detail-show-time";
import MovieDetailSummary from "./movie-detail-summary";
import * as Styled from "./styled";

interface Props {
  movie: IMovieDetail;
}
const MovieDetailTab = ({ movie }: Props) => {
  return (
    <Styled.MovieDetailTab className="container">
      <Tabs
        id="showTime"
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Show Times",
            children: <MovieDetailShowTime movie={movie} />,
          },
          {
            key: "2",
            label: "Summary",
            children: <MovieDetailSummary data={movie.moTa} />,
          },

          // {
          //   key: "3",
          //   label: "Review",
          //   children: "content",
          // },
        ]}
        centered
      />
    </Styled.MovieDetailTab>
  );
};

export default MovieDetailTab;
