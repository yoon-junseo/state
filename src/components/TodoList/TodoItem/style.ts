import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 98%;
  padding: 5px;
  border-bottom: 1px solid white;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;

  & > :first-child {
    cursor: pointer;
    color: green;
  }

  & > :last-child {
    cursor: pointer;
    color: red;
  }
`;

export const StyledInput = styled.input`
  flex: 0.9;
  border: none;
  outline: none;
`;

export const Text = styled.div<{ done: boolean }>`
  cursor: pointer;
  flex: 1;
  text-decoration: ${(props) => (props.done ? 'line-through' : '')};
  text-decoration-color: ${(props) => (props.done ? 'red' : 'black')};
`;
