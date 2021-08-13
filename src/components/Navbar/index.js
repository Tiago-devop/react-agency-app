import {
  Wrapper,
  Container,
  Logo,
  Menu,
  MenuItem,
  Left,
  Button,
} from "./Navbar.styles";

const Navbar = () => (
  <Wrapper>
    <Container>
      <Left>
        <Logo>Agency</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Left>
      <Button>JOIN TODAY</Button>
    </Container>
  </Wrapper>
);

export default Navbar;
