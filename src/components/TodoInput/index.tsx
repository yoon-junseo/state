import React, { useCallback } from 'react';
import { FaPen } from 'react-icons/fa';
import { useRecoilState } from 'recoil';

import { inputState, todoListState, ITodoTypes } from '@/recoil/todo';

import { Wrapper, StyledInput } from './style';

const TodoInput = () => {
  const [text, setText] = useRecoilState<string>(inputState);
  const [todoList, setTodoList] = useRecoilState<ITodoTypes[]>(todoListState);

  const onClickAddTodo = useCallback(() => {
    if (!text.trim()) {
      return;
    }

    const nextId: number = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;

    const todo: ITodoTypes = {
      id: nextId,
      text,
      done: false,
    };

    setTodoList((prev) => [...prev, todo]);
    setText('');
  }, [text, setText, todoList, setTodoList]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onClickAddTodo();
      }
    },
    [onClickAddTodo],
  );

  return (
    <Wrapper>
      <StyledInput type="text" value={text} onChange={onChange} onKeyDown={onKeyDown} placeholder="write to do" />
      <FaPen className="add-button" onClick={onClickAddTodo} />
    </Wrapper>
  );
};

export default TodoInput;
