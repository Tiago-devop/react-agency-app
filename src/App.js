import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";

import { GlobalStyle } from "./GlobalStyle";
import {
  FeatureShape,
  IntroShape,
  Container,
  ServiceShape,
  PriceShape,
} from "./App.styles";

const App = () => (
  <>
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
    <Container>
      <Feature />
      <FeatureShape />
    </Container>
    <Container>
      <Service />
      <ServiceShape />
    </Container>
    <Container>
      <Price />
      <PriceShape />
    </Container>
    <GlobalStyle />
  </>
);

export default App;
