import styled from "styled-components";
import { useRef } from "react";
import { gsap } from "gsap";

type SliderProps = {
  total: number;
  current: number;
  onNext(): void;
};

const SliderStyled = styled.div<SliderProps>`
  font-size: 1.2rem;
  letter-spacing: 0.48rem;
  display: inline-flex;
  align-items: center;
  margin-left: 5.27rem;
  color: ${({ theme }) => theme.colors.dune};
  .slider {
    &-dash {
      width: 9.41px;
      height: 1.31px;
      background-color: ${({ theme }) => theme.colors.dune};
      margin-right: 2.15rem;
    }
    &-next {
      text-transform: uppercase;
      line-height: 1.7rem;
      cursor: pointer;
      user-select: none;
    }
    &-progress {
      height: 1.23px;
      width: 115.42px;
      background-color: ${({ theme }) => theme.colors.gallery};
      margin-left: 2.45rem;
      margin-right: 3.17rem;
      &::before {
        content: "";
        position: absolute;
        height: 1.23px;
        width: ${(props) => (props.current * 115.42) / props.total + "px"};
        background-color: ${({ theme }) => theme.colors.dune};
        transition: all 0.3s linear;
      }
    }
    &-indicate {
      position: relative;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.Rajdhani};
      font-size: 1.2rem;
      & > p {
        display: inline-block;
      }
    }
  }
`;

const Slider: React.VFC<SliderProps> = (props) => {
  const { total, current, onNext } = props;
  const currentSlideRef = useRef<HTMLParagraphElement>(null);

  // const fadeOutEffect = gsap.to(currentSlideRef.current, {
  //   y: 20,
  //   opacity: 0,
  //   duration: 1,
  //   overwrite: true,
  // });

  function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  function onNextHandler() {
    onNext();
    // fadeOutEffect.play();
  }
  return (
    <SliderStyled {...props}>
      <span className="slider-dash"></span>
      <span className="slider-next" onClick={onNextHandler}>
        NEXT SLIDE
      </span>
      <span className="slider-progress"></span>
      <div className="slider-indicate">
        <p className="slider-indicate-current" ref={currentSlideRef}>
          {zeroPad(current, 2)}
        </p>
        /<p className="slider-indicate-total">{zeroPad(total, 2)}</p>
      </div>
    </SliderStyled>
  );
};

export default Slider;
