import Map from "../../img/map.png";
import Phone from "../../img/phone.png";
import Send from "../../img/send.png";

import {
  AddressContainer,
  AddressItem,
  Button,
  Container,
  Form,
  FormContainer,
  Icon,
  Input,
  LeftForm,
  RightForm,
  Text,
  TextArea,
  Title,
  Wrapper,
} from "./Contact.styles";

const Contact = () => (
  <Container>
    <Wrapper>
      <FormContainer>
        <Title>
          Questions? <br /> Let's Get in Touch
        </Title>
        <Form>
          <LeftForm>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Subject" />
          </LeftForm>
          <RightForm>
            <TextArea placeholder="Your Message" />
            <Button>Send</Button>
          </RightForm>
        </Form>
      </FormContainer>
      <AddressContainer>
        <AddressItem>
          <Icon src={Map} />
          <Text>123 Park Avenue st., New York, USA</Text>
        </AddressItem>
        <AddressItem>
          <Icon src={Phone} />
          <Text>+1 631 1234 5678</Text>
          <Text>+1 975 3453 4535</Text>
        </AddressItem>
        <AddressItem>
          <Icon src={Send} />
          <Text>contact@tiago.dev</Text>
          <Text>sales@tiago.dev</Text>
        </AddressItem>
      </AddressContainer>
    </Wrapper>
  </Container>
);

export default Contact;
