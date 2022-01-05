import TopIcons from "components/TopIcons/TopIcons";
import styled from "styled-components";
import { Icons } from "../Icons";
import NavBar from "../NavBar/NavBar";

const HeaderStyled = styled.header`
  display: inline-flex;
  padding: 2.6rem 4.3rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.VFC = () => {
  return (
    <HeaderStyled role="navigation">
      <Icons.Logo />
      <NavBar />
      <TopIcons />
    </HeaderStyled>
  );
};

export default Header;
