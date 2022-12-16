import { lazy } from "react";
import withAuthSync from "../components/authentication/withAuthSync";
const MainLayout = lazy(() => import("../layouts/main"));
const Banner = lazy(() => import("../components/banner"));

const Home = () => {
  return (
    <MainLayout>
      <Banner />
    </MainLayout>
  );
};

export default withAuthSync(Home);
