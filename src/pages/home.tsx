import { useEffect } from "react";
import withAuthSync from "../components/authentication/withAuthSync";
import Banner from "../components/banner";
import Loading from "../components/loading";
import MovieList from "../components/movie";
import SearchTab from "../components/search";
import ShowTime from "../components/tabs/show-time";
import MainLayout from "../layouts/main";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovieListAction } from "../redux/movieSlice";

const Home = () => {
  const {
    movie: { loading },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieListAction());
  }, [dispatch]);

  if (loading) return <Loading />;
  return (
    <MainLayout>
      {/* {loading && <Loading />} */}
      <Banner />
      <SearchTab />
      <MovieList />
      <ShowTime />
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K7AL2OARpTo"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen
      ></iframe> */}
    </MainLayout>
  );
};

export default withAuthSync(Home);
