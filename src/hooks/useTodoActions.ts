import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { toggleTodo, removeTodo } from '@/modules/todos';

export default function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onClickToggleTodo = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onClickRemoveTodo = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

  return { onClickToggleTodo, onClickRemoveTodo };
}
