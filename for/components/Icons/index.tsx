import Arrow from "./Arrow";
import Divider from "./Divider";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Play from "./Play";
import Slogan from "./Slogan";

export type IconProps = {
  size?: number;
  color?: string;
  onClick?(event: React.MouseEvent<SVGSVGElement>): void;
};

export const Icons = {
  Arrow,
  Divider,
  Hamburger,
  Logo,
  Play,
  Slogan,
};
