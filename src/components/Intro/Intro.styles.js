import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

export const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
