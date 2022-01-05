import styled from "styled-components";

const ScrollDownStyled = styled.div`
  position: fixed;
  bottom: 0.6rem;
  left: 6.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  /* width: fit-content; */
  .scroll {
    &-wrapper {
      &-outer {
        display: table;
      }
      &-inner {
        padding: 30% 0;
        height: 0;
      }
    }
    &-content {
      display: block;
      color: ${({ theme }) => theme.colors.dune};
      font-size: 1.4rem;
      line-height: 2.1rem;
      /* Rotate from top left corner (not default) */
      /* transform-origin: 0 0; */
      transform: rotate(-90deg);
      margin-top: -50%;
      white-space: nowrap;
    }
  }
  .line-down {
    background-color: ${({ theme }) => theme.colors.dune};
    height: 4rem;
    width: 1px;
  }
`;
const ScrolDown = () => {
  return (
    <ScrollDownStyled>
      <div className="scroll-wrapper-outer">
        <div className="scroll-wrapper-inner">
          <span className="scroll-content">Scroll</span>
        </div>
      </div>
      <span className="line-down"></span>
    </ScrollDownStyled>
  );
};

export default ScrolDown;
