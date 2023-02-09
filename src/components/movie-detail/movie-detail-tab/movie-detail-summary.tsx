import React from "react";
import * as Styled from './styled'

const MovieDetailSummary = ({ data }: { data: string }) => {
  return <Styled.MovieDetailSummary>{data}</Styled.MovieDetailSummary>;
};

export default MovieDetailSummary;
