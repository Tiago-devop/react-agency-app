import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
`;

export const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
  background-color: pink;
`;

export const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
  background-color: #f88497;
`;
