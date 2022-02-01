import React from 'react';

import TodoProvider from '@/context/todo';

import TodoHead from '@/components/Todo/TodoHead';
import TodoList from '@/components/Todo/TodoList';
import TodoCreate from '@/components/Todo/TodoCreate';

const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoProvider>
  );
};

export default TodoPage;
