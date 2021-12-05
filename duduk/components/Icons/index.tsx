import Chicago from "./Chicago";
import Duduk from "./Duduk";
import Haper from "./Haper";
import Kentucy from "./Kentucy";
import Seven from "./Seven";

export type IconProps = {
  size?: number;
  color?: string;
  onClick?(event: React.MouseEvent<SVGSVGElement>): void;
};

export const Icons = {
  Chicago,
  Duduk,
  Haper,
  Kentucy,
  Seven,
};
