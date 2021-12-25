import { memo } from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  font-size: 3.2rem;
  font-weight: 600;
  justify-content: space-between;
  text-transform: capitalize;
  min-width: 3rem;
  span {
    display: inline-block;
    padding: 1.7rem 1.2rem 0.5rem 1.2rem;
    color: #ffffff;
    background-color: #19292f;
  }

  ${({ theme }) => theme.mixins.maxWidth.md`
    font-size: 2rem;
  `}
`;

const Logo: React.VFC = () => {
  return (
    <LogoStyled>
      Grand Design <span>Interior</span>
    </LogoStyled>
  );
};
export default memo(Logo);
