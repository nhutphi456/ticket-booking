import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import MovieDetailTab from "../components/movie-detail/movie-detail-tab";
import MovieDetailThumb from "../components/movie-detail/movie-detail-thumb";
import MainLayout from "../layouts/main";
import { IMovieDetail } from "../models/movie";
import { movieApi } from "../services/movie";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState<IMovieDetail>({
    maPhim: -1,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: -1,
    lichChieu: [],
  });
  const [loading, setLoading] = useState(false)

  const fetchMovieDetail = async (id: number) => {
    setLoading(true)
    try {
      const { data } = await movieApi.getDetail(id);
      setMovieDetail(data);
    } catch (error) {

    }
    setLoading(false)
  };

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetail(+movieId);
  }, [movieId]);

  if(loading) return <Loading/>
  return (
    <MainLayout>
      <MovieDetailThumb movie={movieDetail} />
      <MovieDetailTab movie={movieDetail} />
    </MainLayout>
  );
};

export default MovieDetailPage;
