import styled from "styled-components";

export const BgDivWrapper = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100vh;
  z-index: 300;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 60% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
