import React from 'react';
import { Link } from 'react-router-dom';

import { useTodoState } from '@/context/todo/hooks';

import { TodoHeadBlock, LengthSpan } from '@/components/Todo/TodoHead/style';

const TodoHead = () => {
  const todoList = useTodoState();

  return (
    <TodoHeadBlock>
      <h1>ToDo</h1>
      <Link to="/sample">sample</Link>
      <LengthSpan>{todoList.length}개</LengthSpan>
    </TodoHeadBlock>
  );
};

export default TodoHead;
