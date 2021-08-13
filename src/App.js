import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

import { GlobalStyle } from "./GlobalStyle";
import { IntroShape, Wrapper } from "./App.styles";

const App = () => (
  <Wrapper>
    <Navbar />
    <Intro />
    <IntroShape />
    <GlobalStyle />
  </Wrapper>
);

export default App;
