import { useState } from "react";

import MiniCard from "../MiniCard";

import How from "../../img/how.png";
import Play from "../../img/play.png";

import {
  Button,
  CardContainer,
  Container,
  Description,
  Icon,
  Image,
  Left,
  Right,
  Title,
  Video,
  Wrapper,
} from "./Service.styles";

const Service = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://vod-progressive.akamaized.net/exp=1629150685~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4951%2F17%2F449759244%2F1976509515.mp4~hmac=2ac1169516304e929da395131030172d46f21ed51850d3c3dc2c747a520dde74/vimeo-prod-skyfire-std-us/01/4951/17/449759244/1976509515.mp4?filename=production+ID%3A5150801.mp4"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>
            We provide digital experience services to startups and small
            business to looking for a partner of their digital media, design &
            development, lead generation and communications requirements. we
            work with you, not for you. Although we have a great resources
          </Description>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
