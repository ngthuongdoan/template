import HomePageContainer from "containers/HomePageContainer/HomePageContainer";
import MainLayout from "layouts/MainLayout/MainLayout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <HomePageContainer />
    </MainLayout>
  );
};

export default HomePage;
