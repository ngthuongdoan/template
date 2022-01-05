import { Icons } from "components/Icons";
import styled from "styled-components";

const SocialListStyled = styled.div`
  position: fixed;
  left: 6.46rem;
  top: 22.07rem;
  .social-list {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    cursor: pointer;
  }
`;

const SocialList: React.VFC = () => {
  return (
    <SocialListStyled role="menubar">
      <ul className="social-list" role="menu">
        <li className="social-list-item" role="menuitem">
          <Icons.Facebook />
        </li>
        <li className="social-list-item" role="menuitem">
          <Icons.Twitter />
        </li>
        <li className="social-list-item" role="menuitem">
          <Icons.Instagram />
        </li>
      </ul>
    </SocialListStyled>
  );
};

export default SocialList;
