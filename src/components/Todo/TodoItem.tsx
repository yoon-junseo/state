import React from 'react';
import styled from 'styled-components';

import { Todo } from '@/modules/todos';

import useTodos from '@/hooks/useTodos';

import useTodoActions from '@/hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo;
};

const Wrapper = styled.li<{ clicked: boolean }>`
  color: ${(props) => (props.clicked ? 'red' : 'black')};
  text-decoration: ${(props) => (props.clicked ? 'line-through' : '')};
`;

const Text = styled.span`
  cursor: pointer;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  color: red;
  margin-left: 4px;
`;

const TodoItem = ({ todo }: TodoItemProps) => {
  const { onClickToggleTodo, onClickRemoveTodo } = useTodoActions(todo.id);

  return (
    <Wrapper clicked={todo.done}>
      <Text onClick={onClickToggleTodo}>{todo.text}</Text>
      <RemoveButton onClick={onClickRemoveTodo}>(X)</RemoveButton>
    </Wrapper>
  );
};

export default TodoItem;
