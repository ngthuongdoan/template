import { Icons } from "components/Icons";
import Item from "components/Item/Item";
import { useRouter } from "next/router";
import styled from "styled-components";

type SectionListProps = {};

const SectionListStyled = styled.ul`
  z-index: 100;
  position: fixed;
  right: 4.4rem;
  top: 18.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    display: flex;
    &:nth-of-type(2n + 1) {
      cursor: pointer !important;
    }
  }
  .divider {
    margin-top: 2.1rem;
    margin-bottom: 2.5rem;
    height: 6rem;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
  }
`;

const SectionList: React.VFC<SectionListProps> = () => {
  const router = useRouter();

  const hash = router.asPath.match(/#([a-z0-9]+)/gi);
  console.log(hash, router.asPath);

  function changePath(path: string) {
    router.push({
      href: "/",
      hash: path,
    });
  }

  return (
    <SectionListStyled>
      <li>
        <Item
          image={<Icons.Stay />}
          title="Stay"
          isActive={hash ? hash.every((h) => h === "#stay") : true}
          onClick={() => changePath("")}
        ></Item>
      </li>
      <li>
        <span className="divider"></span>
      </li>
      <li>
        <Item
          image={<Icons.Dish />}
          title="Dine"
          isActive={!!(hash && hash.every((h) => h === "#dine"))}
          onClick={() => changePath("dine")}
        ></Item>
      </li>
      <li>
        <span className="divider"></span>
      </li>
      <li>
        <Item
          image={<Icons.Play />}
          title="Play"
          isActive={!!(hash && hash.every((h) => h === "#play"))}
          onClick={() => changePath("play")}
        ></Item>
      </li>
    </SectionListStyled>
  );
};

export default SectionList;
