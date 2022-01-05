import Link from "next/link";
import styled from "styled-components";

const NavBarStyled = styled.nav`
  display: flex;

  .menu {
    display: inline-flex;
    margin-bottom: 0.75rem;
    gap: 6.4rem;

    &-item {
      a {
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.7rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.silver};
        &.active {
          color: ${({ theme }) => theme.colors.black};
        }
      }

      &:hover {
        a {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }

  /* ${({ theme }) => theme.mixins.maxWidth.lg`
    .menu {
      display: none;
    }
    
    .hamburger {
      display: block;
    }
  `} */
`;

const NavBar: React.VFC = () => {
  return (
    <NavBarStyled role="menubar">
      <ul className="menu" role="menu">
        <li className="menu-item" role="menuitem">
          <Link href="#collection">Home</Link>
        </li>
        <li className="menu-item" role="menuitem">
          <Link href="#lookbook">Earn & Redeem</Link>
        </li>
        <li className="menu-item" role="menuitem">
          <Link href="#about">Tier Benefits</Link>
        </li>
        <li className="menu-item" role="menuitem">
          <Link href="#contact">Your partners</Link>
        </li>
        <li className="menu-item" role="menuitem">
          <Link href="#contact">Join u by emaar</Link>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
