import styled from "styled-components";

type SliderProps = {
  total: number;
  current: number;
  onNext(): void;
};

const SliderStyled = styled.div<Omit<SliderProps, "onNext">>`
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

  function zeroPad(num: number, places: number) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  function onNextHandler() {
    onNext();
  }
  return (
    <SliderStyled {...props}>
      <span className="slider-dash"></span>
      <div className="slider-next" onClick={onNextHandler}>
        NEXT SLIDE
      </div>
      <span className="slider-progress"></span>
      <div className="slider-indicate">
        <p className="slider-indicate-current">{zeroPad(current, 2)}</p>/
        <p className="slider-indicate-total">{zeroPad(total, 2)}</p>
      </div>
    </SliderStyled>
  );
};

export default Slider;
