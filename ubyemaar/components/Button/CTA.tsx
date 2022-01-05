import { Icons } from "components/Icons";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button";

type CTAButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const CTAStyled = styled.button`
  border: none;
  width: 21.7rem;
  height: 8.106rem;
  padding: 3rem 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.alabaster};
  display: flex;
  gap: 3rem;
  cursor: pointer;
  .button {
    &-children {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.dune};
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.Poppins};
    }
  }
`;

const CTA: React.FC<CTAButtonProps & ButtonProps> = ({
  children,
  icon,
  ref,
  ...rest
}) => {
  return (
    <CTAStyled {...rest}>
      <Icons.RightArrow />
      <div className="button-children">{children}</div>
    </CTAStyled>
  );
};

export default CTA;
