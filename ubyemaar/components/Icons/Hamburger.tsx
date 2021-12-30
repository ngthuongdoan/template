import { memo } from "react";
import { IconProps } from ".";

const Hamburger: React.VFC<IconProps> = ({ size = 22.839 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (15.414 / 22.839)}
      viewBox="0 0 22.839 15.414"
    >
      <g
        fill="none"
        stroke="#2d2926"
        strokeWidth="1.5"
        transform="translate(0 .75)"
      >
        <path d="M0 0h22.839" data-name="Path 4"></path>
        <path d="M0 13.913h22.839" data-name="Path 5"></path>
      </g>
    </svg>
  );
};

export default memo(Hamburger);
