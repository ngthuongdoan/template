import { IconProps } from ".";

const Arrow: React.VFC<IconProps> = ({ size = 68.204 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (25.408 / 68.204)}
      viewBox="0 0 68.204 25.408"
    >
      <g
        fill="none"
        stroke="#be6c42"
        strokeLinecap="round"
        strokeWidth="1"
        transform="translate(-462 -8921.796)"
      >
        <path
          d="M0 0L67 0"
          data-name="Line 5"
          transform="translate(462.5 8934.5)"
        ></path>
        <path
          d="M0 0L10 12"
          data-name="Line 6"
          transform="translate(519.5 8922.5)"
        ></path>
        <path
          d="M0 12L10 0"
          data-name="Line 7"
          transform="translate(519.5 8934.5)"
        ></path>
      </g>
    </svg>
  );
};

export default Arrow;
