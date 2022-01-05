import Header from "components/Header/Header";
import ScrolDown from "components/ScrollDown/ScrolDown";
import SocialList from "components/SocialList/SocialList";
import styled from "styled-components";

const BaseLayoutStyled = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const BaseLayout: React.FC = ({ children }) => {
  return (
    <BaseLayoutStyled>
      <Header />
      <SocialList />
      <ScrolDown />
      <main>{children}</main>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
