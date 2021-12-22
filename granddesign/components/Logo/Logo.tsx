import styled from 'styled-components';

const LogoStyled = styled.div`
  font-size: 32px;
  font-weight: 600;
  justify-content: space-between;
  text-transform: capitalize;
  span {
    display: inline-block;
    padding: 17px 12px 5px 12px;
    color: #ffffff;
    background-color: #19292f;
  }
`;

const Logo: React.VFC = () => {
  return (
    <LogoStyled>
      Grand Design <span>Interior</span>
    </LogoStyled>
  );
};
export default Logo;
