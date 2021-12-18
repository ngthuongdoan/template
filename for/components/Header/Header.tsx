import styled from "styled-components";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Header: React.VFC = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
