import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 8px;
  min-width: 120px;
  color: #ffffff;
  background-color: #3594a0;
  font-weight: bold;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  outline: none;

  &:hover {
    background-color: #037888;
  }
`;

export const Input = styled.input`
  display: none;
  & + svg {
    fill: #dedede;
    cursor: pointer;
  }
  &:checked,
  &:hover {
    & + svg {
      fill: #ffc400;
    }
  }
`;
