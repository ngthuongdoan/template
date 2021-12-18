import { IconProps } from ".";

const Divider: React.VFC<IconProps> = ({ size = 28 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
    >
      <g
        fill="none"
        stroke="#f7e7ce"
        strokeDasharray="2 6"
        strokeWidth="14"
        data-name="Ellipse 9"
      >
        <circle cx="14" cy="14" r="14" stroke="none"></circle>
        <circle cx="14" cy="14" r="7"></circle>
      </g>
    </svg>
  );
};

export default Divider;
