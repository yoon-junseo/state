import React from 'react';

import TodoHead from '@/components/Todo/TodoHead';
import TodoList from '@/components/Todo/TodoList';
import TodoCreate from '@/components/Todo/TodoCreate';

const TodoPage = () => {
  return (
    <>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </>
  );
};

export default TodoPage;
