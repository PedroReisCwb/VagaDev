import styled from "styled-components";

export const BoxFilter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  padding: 0;
  list-style: none;
`;

export const BoxFilterItem = styled.ul`
  max-width: 25%;
  width: 25%;
  flex: 0 0 25%;
  padding: 0 4px;
`;

export const BoxFilterBtn = styled.button<{ active: boolean }>`
  border: 1px solid #ebebeb;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 6px;
  padding: 4px 0;
  transition: 0.5s background;
  &:hover {
    background-color: #ebebeb;
  }
  ${(props) =>
    props.active &&
    `
        background-color: black;
        color: white;
    `}
`;
