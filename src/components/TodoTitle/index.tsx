import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListLengthState } from '@/recoil/todo';

import { Title } from './style';

const TodoTitle = () => {
  const length = useRecoilValue(todoListLengthState);
  return <Title>TodoList with Recoil ({length})</Title>;
};

export default TodoTitle;
