import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Glacial";
    src: url("./fonts/GlacialIndifference-Regular.otf") format('otf');
    font-display: fallback;
  }

  @font-face {
    font-family: "Glacial";
    font-weight: bold;
    src: url("./fonts/GlacialIndifference-Bold.otf") format('otf');
    font-display: fallback;
  }

  *{
    margin: 0;
    font-family: "Glacial";
  }

  body {
    height: 100vh;
  }


`;
