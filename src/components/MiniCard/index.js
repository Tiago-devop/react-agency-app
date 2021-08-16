import { Container, Image, Text } from "./MiniCard.styles";
import Search from "../../img/search.png";

const MiniCard = () => (
  <Container>
    <Image src={Search} />
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
  </Container>
);

export default MiniCard;
