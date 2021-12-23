import Link from "next/link";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const NavBarStyled = styled.nav`
  display: flex;
  .hamburger {
    width: 100%;
    height: 100%;
    display: none;
  }

  .menu {
    display: inline-flex;
    margin-bottom: 8.5px;
    gap: 32px;

    &-item {
      a {
        text-decoration: none;
        font-size: 20px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.6;
      }

      &:hover {
        a {
          opacity: 1;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.md} {
    .menu {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
`;

const NavBar: React.VFC = () => {
  return (
    <NavBarStyled>
      <div className="hamburger">
        <Logo></Logo>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <Link href="#collection">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="#lookbook">Our Projects</Link>
        </li>
        <li className="menu-item">
          <Link href="#about">About Us</Link>
        </li>
        <li className="menu-item">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
