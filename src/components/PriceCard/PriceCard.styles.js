import styled from "styled-components";

export const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;

export const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 30px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 30px 0;
`;

export const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;
`;
