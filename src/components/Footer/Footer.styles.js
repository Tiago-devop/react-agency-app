import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  background-color: crimson;
  color: white;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
