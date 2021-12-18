import React from "react";
import { IconProps } from ".";

const Play: React.VFC<IconProps> = ({ size = 56 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 56 56"
    >
      <g
        fill="#f7e7ce"
        stroke="#713c25"
        strokeDasharray="1 4"
        strokeWidth="31"
        data-name="Ellipse 7"
        opacity="0.45"
      >
        <circle cx="28" cy="28" r="28" stroke="none"></circle>
        <circle cx="28" cy="28" r="12.5" fill="none"></circle>
      </g>
      <path
        fill="#713c25"
        d="M11.6 5.872L1.98.182A1.305 1.305 0 000 1.311v11.377a1.311 1.311 0 001.98 1.129L11.6 8.13a1.311 1.311 0 000-2.258z"
        data-name="Icon awesome-play"
        transform="translate(22.875 20.998)"
      ></path>
    </svg>
  );
};

export default Play;
