import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";

const HomaPageStyled = styled.main``;

const Home: NextPage = () => {
  return (
    <HomaPageStyled>
      <Container>
        <Header></Header>
      </Container>
    </HomaPageStyled>
  );
};

export default Home;
