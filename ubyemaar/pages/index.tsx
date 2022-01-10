import type { NextPage } from "next";
import HomeContainer from "../container/HomeContainer/HomeContainer";
import FoodContainer from "../container/FoodContainer/FoodContainer";
import BaseLayout from "../layouts/BaseLayout";
import SectionList from "components/SectionList/SectionList";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <SectionList></SectionList>
      <HomeContainer></HomeContainer>
      <FoodContainer></FoodContainer>
    </BaseLayout>
  );
};

export default Home;
