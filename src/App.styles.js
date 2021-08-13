import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(100% 0, 79% 0, 52% 81%, 100% 81%);
  background-color: crimson;
`;
