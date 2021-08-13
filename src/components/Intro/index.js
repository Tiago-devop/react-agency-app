import {
  Button,
  Contact,
  ContactText,
  Container,
  Description,
  Info,
  Left,
  Phone,
  Right,
  Title,
  Image,
} from "./Intro.styles";

import Woman from "../../img/woman.png";

const Intro = () => (
  <Container>
    <Left>
      <Title>Adventures in creative age</Title>
      <Description>
        We believe that designing products and services in close partnership
        with our clients is the only way to have a real impact on their
        business.
      </Description>
      <Info>
        <Button>START A PROJECT</Button>
        <Contact>
          <Phone>Call Us (012) 345 - 6789</Phone>
          <ContactText>For any question or concern</ContactText>
        </Contact>
      </Info>
    </Left>
    <Right>
      <Image src={Woman} alt="Photo by Julio Motta from Pexels" />
    </Right>
  </Container>
);

export default Intro;
