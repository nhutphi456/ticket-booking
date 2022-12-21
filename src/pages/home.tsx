import withAuthSync from "../components/authentication/withAuthSync";
import Banner from "../components/banner";
import MainLayout from "../layouts/main";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
    </MainLayout>
  );
};

export default withAuthSync(Home);
