import Link from "next/link";
import styled from "styled-components";
import { Icons } from "../Icons";

const NavBarStyled = styled.nav`
  margin-right: 57.5px;
  display: flex;
  .menu {
    margin-top: 44px;
    display: inline-flex;
    gap: 88px;
    margin-right: 129.5px;
    &-item {
      a {
        font-family: ${({ theme }) => theme.fonts.Gilroy};
        font-size: 17px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.brownRust};
        padding-bottom: 3px;
      }
      &:hover {
        a {
          border-bottom: 1px solid ${({ theme }) => theme.colors.pickledBean};
        }
      }
    }
  }
  /* Hamburger */
  svg {
    cursor: pointer;
    margin-top: 47.5px;
  }
`;

const NavBar: React.VFC = () => {
  return (
    <NavBarStyled>
      <ul className="menu">
        <li className="menu-item">
          <Link href="#collection">Collection</Link>
        </li>
        <li className="menu-item">
          <Link href="#lookbook">Lookbook</Link>
        </li>
        <li className="menu-item">
          <Link href="#about">About</Link>
        </li>
      </ul>
      <Icons.Hamburger />
    </NavBarStyled>
  );
};

export default NavBar;
