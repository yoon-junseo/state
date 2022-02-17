import React from 'react';

import Counter from '@/components/Counter';

import TodoInsert from '@/components/Todo/TodoInsert';
import TodoList from '@/components/Todo/TodoList';

const App = () => {
  return (
    <>
      <Counter />
      <TodoInsert />
      <TodoList />
    </>
  );
};

export default App;
