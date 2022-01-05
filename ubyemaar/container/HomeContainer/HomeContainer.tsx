import Button from "components/Button/Button";
import Slider from "components/Slider/Slider";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

const HomeContainerStyled = styled.div`
  position: relative;

  .content {
    &-wrapper {
      padding-left: 15.4rem;
      padding-right: 5.4rem;
      padding-top: 10rem;
      display: flex;
    }
    &-footer {
      position: fixed;
      display: flex;
      align-items: center;
      bottom: 0;
      left: 11.5rem;
    }
  }
  .title {
    font-family: ${({ theme }) => theme.fonts.BarlowCondensed};
    color: ${({ theme }) => theme.colors.dune};
    font-size: 4.3rem;
    line-height: 5.2rem;
    margin-bottom: 4.2rem;
    &--highlight {
      display: block;
      color: ${({ theme }) => theme.colors.dune};
      font-weight: bold;
      line-height: 9.1rem;
      font-size: 7.6rem;
    }
  }

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.Poppins};
    color: ${({ theme }) => theme.colors.silverChalice};
    font-size: 1.7rem;
    line-height: 2.4rem;
    font-weight: 200;
    &-content {
      display: block;
      color: ${({ theme }) => theme.colors.silverChalice};
    }
    &--highlight {
      color: ${({ theme }) => theme.colors.dune};
    }
  }

  .image-wrapper {
    transform: translateY(-20%) translateX(60%);
  }
`;

const TOTAL_SLIDE = 3;
const HomeContainer: React.VFC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  function onNextSlide() {
    if (currentSlide + 1 <= TOTAL_SLIDE) {
      setCurrentSlide((pre) => pre + 1);
    } else {
      setCurrentSlide(1);
    }
  }

  return (
    <HomeContainerStyled>
      <div className="content-wrapper">
        <div>
          <h1 className="title">
            <span className="title--highlight">THE MOST REWARDING</span>
            LOYALTY PROGRAM IN THE REGION
          </h1>
          <h2 className="subtitle">
            <span className="subtitle-content">
              Earn double u-points every day from
            </span>
            <span className="subtitle--highlight">1st June</span> to{" "}
            <span className="subtitle--highlight">30th September</span>
          </h2>
        </div>
        <div>
          <div className="image-wrapper">
            <Image
              src="/images/Burj_Khalifa.png"
              width={353.42}
              height={804.27}
            ></Image>
          </div>
        </div>
      </div>
      <div className="content-footer">
        <Button.CTA>join now</Button.CTA>
        <Slider
          total={TOTAL_SLIDE}
          current={currentSlide}
          onNext={onNextSlide}
        />
      </div>
    </HomeContainerStyled>
  );
};

export default HomeContainer;
