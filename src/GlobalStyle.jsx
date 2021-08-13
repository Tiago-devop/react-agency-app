import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Glacial";
    src: url("./fonts/GlacialIndifference-Regular.otf") format('otf');
  }

  @font-face {
    font-family: "Glacial";
    font-weight: bold;
    src: url("./fonts/GlacialIndifference-Bold.otf") format('otf');
  }

  *{
    margin: 0;
    font-family: "Glacial";
  }
`;
