import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: 30px;
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  .add-button {
    cursor: pointer;
    color: green;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  color: white;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
`;
