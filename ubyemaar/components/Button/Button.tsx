import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled from "styled-components";
import CTA from "./CTA";

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {
  icon?: React.ReactNode;
};

type StaticProps = {
  CTA: typeof CTA;
};
const ButtonStyled = styled("button")<ButtonProps>``;

const Button: React.VFC<NativeButtonProps & ButtonProps> & StaticProps = ({
  children,
  icon,
  ref,
  ...rest
}) => {
  return (
    <ButtonStyled {...rest}>
      {icon && <div className="button-icon">{icon}</div>}
      <div className="button-children">{children}</div>
    </ButtonStyled>
  );
};

Button.displayName = "Button";
Button.CTA = CTA;

export default Button;
