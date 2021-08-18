import { Container, Copyright, List, ListItem, Wrapper } from "./Footer.styles";

const Footer = () => (
  <Container>
    <Wrapper>
      <List>
        <ListItem>Guide</ListItem>
        <ListItem>Support</ListItem>
        <ListItem>API</ListItem>
        <ListItem>Community</ListItem>
      </List>
      <Copyright>Tiago Dev &copy;</Copyright>
    </Wrapper>
  </Container>
);

export default Footer;
