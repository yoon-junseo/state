import React, { useRef, useReducer, createContext } from 'react';
import { State, ToDoDispatch } from './types';
import todoReducer from './reducer';

// export const TodoStateContext = createContext<State>({ id: 0, todoList: [] });
export const TodoStateContext = createContext<State>([]);
export const TodoDispatchContext = createContext<ToDoDispatch>(() => null);

// const initialState: State = { id: 0, todoList: [] };
const initialState: State = [];

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
