import styled from "styled-components";

const MainSectionStyled = styled.main`
  position: relative;

  h1 {
    position: relative;
    font-size: 7rem;
    font-weight: 600;
    margin-top: 12.5rem;
    line-height: 8.5rem;
    max-width: 130rem;
  }
  h2 {
    opacity: 0.6;
    font-size: 3rem;
    line-height: 3.6rem;
    margin-top: 2.2rem;
    margin-bottom: 6.7rem;
    max-width: 83rem;
  }
  .introduction {
    position: relative;
  }

  ${({ theme }) => theme.mixins.maxWidth.lg`
    h1 {
      font-size: 3.2rem;
      line-height: 4rem;
      max-width: 55rem;
    }
    
    h2 {
      font-size:1.5rem;
      line-height: 2rem;
      max-width: 55rem;
    }
  `}

  ${({ theme }) => theme.mixins.maxWidth.md`
    h1 {
      margin-top: 5.5rem;
    }
    
    h2 {
      margin-bottom: 3.7rem;
    }`}
`;

const OverlayStyled = styled.div`
  .rect {
    position: absolute;
    border: 4px solid #707070;
    opacity: 0.05;
    &-1 {
      width: 124.3rem;
      height: 100.2rem;
      left: -15.6rem;
    }
    &-2 {
      width: 86.8rem;
      height: 70rem;
      left: 39.6rem;
      top: 9.5rem;
    }
    &-3 {
      width: 124.3rem;
      height: 100.2rem;
      left: -36.7rem;
      top: 20rem;
    }

    ${({ theme }) => theme.mixins.maxWidth.md`
      &-1 {
        left: -100.6rem;
      }

      &-2 {
        left: -55.6rem;
        top: 4.5rem;
      }

      &-3 {
        left: -110.7rem;
        top: 18rem;
      }
    `}
  }
`;

const SliderStyled = styled.div`
  position: relative;
  margin-left: -10rem;
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  .slide {
    width: 62.4rem;
    height: 31.4rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &-1 {
      background-image: url(images/1.webp);
    }
    &-2 {
      background-image: url(images/2.webp);
    }
  }

  p {
    margin-left: -0.5rem;
    font-size: 2rem;
    writing-mode: vertical-rl;
    line-height: 2.4rem;
  }

  ${({ theme }) => theme.mixins.maxWidth.md`
    gap: 1rem;

    .slide{
      width: 30.4rem;
      height: 15.3rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.2rem;
    }
  `}
`;

const CardStyled = styled.div`
  transform: translateY(-20px);
  box-sizing: border-box;
  width: 72.5rem;
  height: 17.4rem;
  padding: 0 4.2rem 0 4.5rem;
  box-shadow: 2rem 3.6rem 8rem rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: space-between;
  h1 {
    display: inline;
    font-size: 3.4rem;
    font-weight: 600;
    line-height: 4rem;
    margin-bottom: 1.9rem;
  }
  p {
    font-size: 2rem;
    opacity: 0.6;
    line-height: 2.4rem;
  }
  span {
    font-size: 8rem;
    font-weight: 500;
    opacity: 0.5;
    line-height: 9.8rem;
  }

  ${({ theme }) => theme.mixins.maxWidth.md`
    width: 30rem;
    height: 7.2rem;
    padding: 0 1.2rem 0 1.5rem;
    
    h1 {
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.2rem;
    }

    span{
      font-size: 4rem;
      line-height: 4.4rem;
    }
  `}
`;

const MainSection = () => {
  return (
    <MainSectionStyled>
      <OverlayStyled>
        <div className="rect rect-1"></div>
        <div className="rect rect-2"></div>
        <div className="rect rect-3"></div>
      </OverlayStyled>
      <div role="contentinfo">
        <h1 role="heading">
          Bring your dream office interiors to Life with our design expertise
        </h1>
        <h2>
          Complete the designs with painting, flooring and <br /> other decor
          solutions. Move in with ease, with our hassle-free civil work and
          installation services.
        </h2>
      </div>
      <div className="introduction">
        <SliderStyled>
          <div className="slide slide-1"></div>
          <div className="slide slide-2"></div>
          <p>Co Working Interiors</p>
        </SliderStyled>
        <CardStyled>
          <div>
            <h1>Office Architecture </h1>
            <p>Our office interior works for Co - Working Space</p>
          </div>
          <div>
            <span>1/2</span>
          </div>
        </CardStyled>
      </div>
    </MainSectionStyled>
  );
};

export default MainSection;
