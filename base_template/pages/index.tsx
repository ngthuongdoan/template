import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";

const HomaPageStyled = styled.div`
  position: relative;
  padding: 6rem 10rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${({ theme }) => theme.mixins.maxWidth.lg`
  padding: 6rem 6rem;
  `}

  ${({ theme }) => theme.mixins.maxWidth.sm`
    padding: 1rem 2rem;
  `}
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
