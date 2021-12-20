import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Section } from "../components/Section";

const HomaPageStyled = styled.div``;

const Home: NextPage = () => {
  return (
    <HomaPageStyled>
      <Container>
        <Header></Header>
        <main>
          <Section.Intro />
        </main>
      </Container>
    </HomaPageStyled>
  );
};

export default Home;
