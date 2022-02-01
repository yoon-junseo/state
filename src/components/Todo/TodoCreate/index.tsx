import React, { useState, useCallback } from 'react';

import { useTodoState, useTodoDispatch } from '@/context/todo/hooks';

const TodoCreate = () => {
  const [todo, setTodo] = useState<string>('');
  const [id, setId] = useState<number>(0);
  // const { id } = useTodoState();

  const dispatch = useTodoDispatch();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    },
    [todo],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      e.preventDefault();
      // dispatch({ type: 'CREATE', todo: { id: id + 1, text: todo, done: false } });
      dispatch({ type: 'CREATE', todo: { id, text: todo, done: false } });
      setTodo('');
      setId((prev) => prev + 1);
    },
    [todo],
  );

  return (
    <form onSubmit={onSubmit}>
      <input value={todo} onChange={onChange} placeholder="writ todo" />
      <button type="submit" onSubmit={onSubmit}>
        REGISTER
      </button>
    </form>
  );
};

export default TodoCreate;
