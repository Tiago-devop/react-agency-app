import {
  Button,
  Container,
  List,
  ListItem,
  Price,
  PriceContainer,
  Type,
} from "./PriceCard.styles";

const PriceCard = ({ price, type }) => (
  <Container>
    <PriceContainer>
      $<Price>{price}</Price>/month
    </PriceContainer>
    <Type>{type} Plan</Type>
    <List>
      <ListItem>200 Hand-Crafted Templates</ListItem>
      <ListItem>Exclusive Support</ListItem>
      <ListItem>50+ PreBuilt Websites</ListItem>
      <ListItem>Premium Plugins</ListItem>
    </List>
    <Button>Join Now</Button>
  </Container>
);

export default PriceCard;
