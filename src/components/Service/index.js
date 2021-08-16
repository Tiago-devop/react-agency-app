import MiniCard from "../MiniCard";
import How from "../../img/how.png";

import {
  CardContainer,
  Container,
  Description,
  Image,
  Left,
  Right,
  Title,
  Wrapper,
} from "./Service.styles";

const Service = () => (
  <Container>
    <Left>
      <Image src={How} />
    </Left>
    <Right>
      <Wrapper>
        <Title>Simple process to start</Title>
        <Description>
          We provide digital experience services to startups and small business
          to looking for a partner of their digital media, design & development,
          lead generation and communications requirements. we work with you, not
          for you. Although we have a great resources
        </Description>
        <CardContainer>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </CardContainer>
      </Wrapper>
    </Right>
  </Container>
);

export default Service;
