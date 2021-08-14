import {
  Container,
  Left,
  Right,
  Image,
  Title,
  SubTitle,
  Description,
  Button,
} from "./Feature.styles";

import Cellphone from "../../img/cellphone.png";
import AnimatedShapes from "./../AnimatedShapes";

const Feature = () => (
  <Container>
    <Left>
      <Image src={Cellphone} />
    </Left>
    <Right>
      <Title>
        <b>good</b> design
        <br />
        <b>good</b> business
      </Title>
      <SubTitle>We know that good design means good business.</SubTitle>
      <Description>
        We help our clients succeed by creating brand identities, digital
        experiences, and print materials that communicate clearly, achieve
        marketing goals, and look fantastic.
      </Description>
      <Description>
        We care your business and guarantee you to achieve marking goals.
      </Description>
      <Button>Learn More</Button>
    </Right>
    <AnimatedShapes />
  </Container>
);

export default Feature;
