import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, ITodoTypes } from '@/recoil/todo';

import TodoItem from '@/components/TodoList/TodoItem';

import { Wrapper } from './style';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState<ITodoTypes[]>(todoListState);

  const onClickDone = useCallback(
    (id: number) => {
      setTodoList(todoList.map((todo: ITodoTypes) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    },
    [setTodoList, todoList],
  );

  const onClickDelete = useCallback(
    (id: number) => {
      setTodoList(todoList.filter((todo: ITodoTypes) => todo.id !== id));
    },
    [setTodoList, todoList],
  );

  return (
    <Wrapper>
      {todoList &&
        todoList.map((todo: ITodoTypes) => {
          const { id, text, done } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              done={done}
              todoList={todoList}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
              setTodoList={setTodoList}
            />
          );
        })}
    </Wrapper>
  );
};

export default TodoList;
