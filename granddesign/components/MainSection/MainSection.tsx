import styled from "styled-components";

const MainSectionStyled = styled.main`
  position: relative;

  h1 {
    position: relative;
    font-size: 70px;
    font-weight: 600;
    margin-top: 125px;
    line-height: 85px;
  }
  h2 {
    opacity: 0.6;
    font-size: 30px;
    line-height: 36px;
    margin-top: 22px;
    margin-bottom: 67px;
  }
  .introduction {
    position: relative;
  }
`;

const OverlayStyled = styled.div`
  .rect {
    position: absolute;
    border: 4px solid #707070;
    opacity: 0.05;
    &-1 {
      width: 1243px;
      height: 1002px;
      left: -156px;
    }
    &-2 {
      width: 868px;
      height: 700px;
      left: 396px;
      top: 95px;
    }
    &-3 {
      width: 1243px;
      height: 1002px;
      left: -367px;
      top: 200px;
    }
  }
`;

const SliderStyled = styled.div`
  position: relative;
  margin-left: -100px;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  .slide {
    width: 624px;
    height: 314px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &-1 {
      background-image: url(images/1.png);
    }
    &-2 {
      background-image: url(images/2.png);
    }
  }

  p {
    margin-left: -5px;
    font-size: 20px;
    writing-mode: vertical-rl;
    line-height: 24px;
  }
`;

const CardStyled = styled.div`
  transform: translateY(-20px);
  box-sizing: border-box;
  width: 725px;
  height: 174px;
  padding: 0 42px 0 45px;
  box-shadow: 20px 36px 80px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: space-between;
  h1 {
    display: inline;
    font-size: 34px;
    font-weight: 600;
    line-height: 41px;
    margin-bottom: 19px;
  }
  p {
    font-size: 20px;
    opacity: 0.6;
    line-height: 24px;
  }
  span {
    font-size: 80px;
    font-weight: 500;
    opacity: 0.5;
    line-height: 98px;
  }
`;

const MainSection = () => {
  return (
    <MainSectionStyled>
      <OverlayStyled>
        <div className="rect rect-1"></div>
        <div className="rect rect-2"></div>
        <div className="rect rect-3"></div>
      </OverlayStyled>
      <div>
        <h1>
          Bring your dream office interiors to
          <br />
          Life with our design expertise
        </h1>
        <h2>
          Complete the designs with painting, flooring and <br />
          other decor solutions. Move in with ease, with our hassle-free <br />
          civil work and installation services.
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
