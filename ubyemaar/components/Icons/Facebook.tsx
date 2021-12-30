import { IconProps } from ".";

const Facebook: React.VFC<IconProps> = ({ size = 9.052, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (16.458 / 9.052)}
      viewBox="0 0 9.052 16.458"
    >
      <path
        fill="#2d2926"
        d="M19.552 3h-2.469a4.114 4.114 0 00-4.114 4.114v2.469H10.5v3.292h2.469v6.583h3.291v-6.583h2.469l.823-3.292H16.26V7.114a.823.823 0 01.823-.823h2.469z"
        data-name="Icon feather-facebook"
        transform="translate(-10.5 -3)"
      ></path>
    </svg>
  );
};

export default Facebook;
