import { Icons } from "components/Icons";
import styled from "styled-components";

const TopIconsStyled = styled.div`
  display: flex;

  .menu {
    display: inline-flex;
    margin-right: 1.8rem;
  }
`;

const TopIcons: React.VFC = () => {
  return (
    <TopIconsStyled role="menubar">
      <ul className="menu" role="menu">
        <li className="menu-item" role="menuitem">
          <Icons.Search />
        </li>
        <li
          className="menu-item"
          role="menuitem"
          style={{ margin: "0 2.8rem 0 2.6rem" }}
        >
          <Icons.Account />
        </li>
        <li className="menu-item" role="menuitem">
          <Icons.Hamburger />
        </li>
      </ul>
    </TopIconsStyled>
  );
};

export default TopIcons;
