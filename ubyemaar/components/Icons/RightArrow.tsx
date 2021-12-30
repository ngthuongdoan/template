import { IconProps } from ".";

const RightArrow: React.VFC<IconProps> = ({ size = 9.022 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (15.356 / 9.022)}
      data-name="Group 20428"
      viewBox="0 0 9.022 15.356"
    >
      <path
        fill="#2d2926"
        d="M110.255 7.079L103.421.245a.842.842 0 00-1.188 0l-.5.5a.841.841 0 000 1.188l5.739 5.738-5.745 5.745a.842.842 0 000 1.188l.5.5a.842.842 0 001.188 0l6.84-6.84a.848.848 0 000-1.192z"
        data-name="Path 28675"
        transform="translate(-101.478)"
      ></path>
    </svg>
  );
};

export default RightArrow;
