import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Service from "./components/Service";

import { GlobalStyle } from "./GlobalStyle";
import {
  FeatureShape,
  IntroShape,
  Container,
  ServiceShape,
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
    <GlobalStyle />
  </>
);

export default App;
