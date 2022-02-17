import React, { useState, ChangeEvent, FormEvent } from 'react';

import useTodos from '@/hooks/useTodos';
import useAddTodo from '@/hooks/useAddTodo';

const TodoInsert = () => {
  const [value, setValue] = useState<string>('');
  const onClickAddTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClickAddTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder="write todo" required />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoInsert;
