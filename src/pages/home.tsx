import withAuthSync from "../components/authentication/withAuthSync";
import Banner from "../components/banner";
import SearchTab from "../components/search";
import MainLayout from "../layouts/main";

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <SearchTab/>
    </MainLayout>
  );
};

export default withAuthSync(Home);
