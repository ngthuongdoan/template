import { IconProps } from ".";

const Twitter: React.VFC<IconProps> = ({ size = 14.772, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * (12.049 / 14.772)}
      viewBox="0 0 14.772 12.049"
    >
      <path
        fill="#e3e3e3"
        d="M16.272 4.491a7.319 7.319 0 01-2.108 1.027 3.008 3.008 0 00-5.278 2.015V8.2a7.158 7.158 0 01-6.043-3.037S.157 11.206 6.2 13.892a7.816 7.816 0 01-4.7 1.343c6.043 3.357 13.43 0 13.43-7.722a3.022 3.022 0 00-.054-.557 5.184 5.184 0 001.396-2.465z"
        data-name="Icon feather-twitter"
        transform="translate(-1.5 -4.485)"
      ></path>
    </svg>
  );
};

export default Twitter;
