import Button from "components/Button/Button";
import { NextPage } from "next";
import { Icons } from "../components/Icons";

const DemoPage: NextPage = () => {
  return (
    <div>
      <Icons.Account />
      <Icons.CoinFive />
      <Icons.CoinFour />
      <Icons.CoinOne />
      <Icons.CoinThree />
      <Icons.CoinTwo />
      <Icons.Facebook />
      <Icons.Hamburger />
      <Icons.Instagram />
      <Icons.Logo />
      <Icons.RightArrow />
      <Icons.Search />
      <Icons.Twitter />
      <Icons.Stay />

      <Icons.Dish />
      <Icons.Play />

      <Button>Test 1</Button>
      <Button.CTA>JOIN NOW</Button.CTA>
    </div>
  );
};

export default DemoPage;
