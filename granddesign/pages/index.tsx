import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";

const HomaPageStyled = styled.div`
  position: relative;
  padding: 60px 100px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <HomaPageStyled>
      <Header />
      <MainSection />
    </HomaPageStyled>
  );
};

export default Home;
