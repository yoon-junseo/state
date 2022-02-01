import React from 'react';

import { useTodoState, useTodoDispatch } from '@/context/todo/hooks';

import { ListWrapper, ToggledLi, NotToggledLi } from '@/components/Todo/TodoList/style';

const TodoList = () => {
  const todoList = useTodoState();
  const dispatch = useTodoDispatch();

  const onClickToggle = (id: number) => {
    dispatch({ type: 'TOGGLE', id });
  };

  const onClickRemove = (id: number) => {
    dispatch({ type: 'REMOVE', id });
  };

  return (
    <ul>
      {todoList.map((todo) =>
        todo.done ? (
          <ListWrapper>
            <ToggledLi key={todo.id} onClick={() => onClickToggle(todo.id)}>
              {todo.text}
            </ToggledLi>
            <button type="button" onClick={() => onClickRemove(todo.id)}>
              DELETE
            </button>
          </ListWrapper>
        ) : (
          <ListWrapper>
            <NotToggledLi key={todo.id} onClick={() => onClickToggle(todo.id)}>
              {todo.text}
            </NotToggledLi>
            <button type="button" onClick={() => onClickRemove(todo.id)}>
              DELETE
            </button>
          </ListWrapper>
        ),
      )}
    </ul>
  );
};

export default TodoList;
