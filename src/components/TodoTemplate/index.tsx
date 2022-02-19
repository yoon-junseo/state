import React from 'react';

import TodoTitle from '@/components/TodoTitle';
import TodoList from '@/components/TodoList';
import TodoInput from '@/components/TodoInput';

import { Wrapper } from './style';

const TodoTemplate = () => {
  return (
    <Wrapper>
      <TodoTitle />
      <TodoList />
      <TodoInput />
    </Wrapper>
  );
};

export default TodoTemplate;
