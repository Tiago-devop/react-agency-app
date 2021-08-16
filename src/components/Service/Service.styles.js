import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 150%;
  margin-left: 200px;
`;

export const Right = styled.div`
  width: 50%;
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
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
