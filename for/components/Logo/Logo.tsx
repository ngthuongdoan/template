import Link from "next/link";
import styled from "styled-components";
import themeConfig from "../../config/themes";
import { Icons } from "../Icons";

const LogoStyled = styled.div`
  font-size: 28px;
  background-color: ${({ theme }) => theme.colors.pickledBean};
  padding: 24px 19px 14px 16px;
  border-bottom-right-radius: 30px;
  display: inline-block;
  margin-left: 79px;
  height: 100%;
`;

const Logo: React.VFC = () => {
  return (
    <Link href="/">
      <LogoStyled>
        <Icons.Logo color={themeConfig.colors.sideCar} size={65} />
      </LogoStyled>
    </Link>
  );
};

export default Logo;
