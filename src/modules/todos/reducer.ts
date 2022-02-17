import { createReducer } from 'typesafe-actions';

import { TodosState, TodosAction } from '@/modules/todos/types';
import { addTodo, toggleTodo, removeTodo } from '@/modules/todos/actions';

const initialState: TodosState = [
  {
    id: 1,
    text: '잠자기',
    done: true,
  },
  {
    id: 2,
    text: '밥먹기',
    done: false,
  },
  {
    id: 3,
    text: '티비보기',
    done: false,
  },
];

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, action) =>
    state.concat({
      id: Math.max(...state.map((todo) => todo.id)) + 1,
      text: action.payload,
      done: false,
    }),
  )
  .handleAction(toggleTodo, (state, action) =>
    state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
  )
  .handleAction(removeTodo, (state, action) => state.filter((todo) => todo.id !== action.payload));

export default todos;
