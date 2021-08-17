import styled from "styled-components";

export const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

export const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

export const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

export const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;
