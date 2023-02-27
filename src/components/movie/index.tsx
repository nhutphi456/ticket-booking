import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import _ from "lodash";
import useMobile from "../../hooks/useMobile";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MovieItem from "./movie-item";
import * as Styled from "./styled";

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className="arrow left-arrow" onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

const NextArrow = ({ onClick }: any) => {
  return (
    <div className="arrow right-arrow" onClick={onClick}>
      <RightOutlined />
    </div>
  );
};
const MovieList = () => {
  const {
    movie: { data },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const isMobile = useMobile();

  // useEffect(() => {
  //   dispatch(getMovieListAction());
  // }, []);

  const settings = {
    nextArrow: !isMobile ? <NextArrow /> : <></>,
    prevArrow: !isMobile ? <PrevArrow /> : <></>,
  };
  // if(loading) return <div>Loading...</div>
  return (
    <Styled.MovieList className="container">
      <Carousel draggable arrows {...settings}>
        {_.chunk(data, !isMobile ? 8 : 4).map((m, idx) => {
          return (
            <div className="movie-slide" key={idx}>
              <Row gutter={!isMobile ? [40, 40] : [5, 5]}>
                {m.map((movie, index) => {
                  return (
                    <Col key={index} md={6} sm={12} xs={12}>
                      <MovieItem movie={movie} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </Carousel>
    </Styled.MovieList>
  );
};

export default MovieList;
