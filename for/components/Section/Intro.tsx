import styled from "styled-components";
import { Icons } from "../Icons";

const IntroStyled = styled.section`
  position: relative;
  background-color: #e6d9bf;
  /* Slogan */
  .slogan {
    position: absolute;
    width: 100%;
    max-width: 165.545px;
    right: 57.5px;
    top: 60px;
  }
`;

const OverlayStyled = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  z-index: -1;
  width: fit-content;
  height: 100%;
  font-size: 396px;
  font-family: ${({ theme }) => theme.fonts.ApparelDisplay};
  color: ${({ theme }) => theme.colors.pickledBean + "17"};
  font-weight: 400;
  transform: rotateZ(-90deg) translateY(-20px);
`;

const HeadlineStyled = styled.div`
  font-family: ${({ theme }) => theme.fonts.ApparelDisplay};
  position: relative;
  width: 100%;
  height: 100%;
`;

const Intro: React.VFC = () => {
  return (
    <>
      <OverlayStyled>2021</OverlayStyled>
      <IntroStyled>
        <div className="slogan">
          <Icons.Slogan />
        </div>

        <HeadlineStyled>
          {/* <Icons.Logo /> */}
          {/* <div className="text-every">every</div>
          <div className="text-woman">
            <span>W</span>
            <span>oman</span>
          </div>
          <div className="text-lastest-collection">latest collection</div> */}
        </HeadlineStyled>
      </IntroStyled>
    </>
  );
};

export default Intro;
