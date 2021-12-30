import type { NextPage } from "next";
import HomeContainer from "../container/HomeContainer/HomeContainer";
import BaseLayout from "../layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <HomeContainer></HomeContainer>
    </BaseLayout>
  );
};

export default Home;
