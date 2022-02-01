import { useContext } from 'react';
import { TodoStateContext, TodoDispatchContext } from '@/context/todo';

export const useTodoState = () => {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('Cannot find TodoProvider');

  return state;
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('Cannot find TodoProvider');

  return dispatch;
};
