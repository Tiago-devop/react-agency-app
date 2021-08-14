import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";

import { GlobalStyle } from "./GlobalStyle";
import { FeatureShape, IntroShape, Wrapper } from "./App.styles";

const App = () => (
  <>
    <Wrapper>
      <Navbar />
      <Intro />
      <IntroShape />
      <GlobalStyle />
    </Wrapper>
    <Wrapper>
      <Feature />
      <FeatureShape />
    </Wrapper>
  </>
);

export default App;
