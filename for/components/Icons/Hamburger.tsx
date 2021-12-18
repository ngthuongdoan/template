import { IconProps } from ".";

const Hamburger: React.VFC<IconProps> = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (18 / 24)}
      viewBox="0 0 24 18"
    >
      <g
        fill="none"
        stroke="#713c25"
        strokeWidth="2"
        data-name="main menu"
        transform="translate(-1866.5 -46.5)"
      >
        <path
          d="M0 0L24 0"
          data-name="Line 1"
          transform="translate(1866.5 47.5)"
        ></path>
        <path
          d="M0 0L16 0"
          data-name="Line 2"
          transform="translate(1874.5 55.5)"
        ></path>
        <path
          d="M0 0L8 0"
          data-name="Line 3"
          transform="translate(1882.5 63.5)"
        ></path>
      </g>
    </svg>
  );
};

export default Hamburger;
