import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  position: relative;
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 150%;
  margin-left: 200px;
`;

export const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1``;

export const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 180px;
  border: none;
  border-radius: 30px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 30px;
  right: 5px;
  top: 30px;
`;
