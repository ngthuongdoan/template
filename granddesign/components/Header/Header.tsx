import styled from "styled-components";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const HeaderStyled = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Header: React.VFC = () => {
  return (
    <HeaderStyled role="navigation">
      <Logo />
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
