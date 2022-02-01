import { Dispatch } from 'react';

// export type State = { id: number; todoList: Array<TodoItem> };
export type State = Array<TodoItem>;

type TodoItem = { id: number; text: string; done: boolean };

export type Action =
  | { type: 'CREATE'; todo: TodoItem }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

export type ToDoDispatch = Dispatch<Action>;
