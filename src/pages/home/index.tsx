import { lazy } from "react";
const MainLayout = lazy(() => import("../../layouts/main"));

const Home = () => {
  return <MainLayout>Home</MainLayout>;
};

export default Home;
