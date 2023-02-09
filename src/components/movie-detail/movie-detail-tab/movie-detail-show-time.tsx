import React, { useEffect } from "react";
import useShowTimeDetail from "../../../hooks/useShowTimeDetail";
import { IMovieDetail } from "../../../models/movie";
import ShowTimeDetailTab from "../../tabs/show-time-detail";

interface Props {
  movie: IMovieDetail;
}
const MovieDetailShowTime = ({ movie }: Props) => {
  const showTimes = useShowTimeDetail(movie.lichChieu);

  useEffect(() => {
    console.log("sho3w", showTimes);
  }, [showTimes]);
  return <ShowTimeDetailTab showTimes={showTimes} />;
};

export default MovieDetailShowTime;
