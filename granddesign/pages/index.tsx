import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";

const Wrapper = styled.div`
  height: 100vh;
`;

const HomaPageStyled = styled.div`
  padding: 60px 100px;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <HomaPageStyled>
        <Container>
          <Header />
          <MainSection />
        </Container>
      </HomaPageStyled>
    </Wrapper>
  );
};

export default Home;
