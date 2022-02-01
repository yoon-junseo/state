import { State, Action } from './types';

const todoReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'CREATE':
      // return { ...state, id: action.todo.id, todoList: state.todoList.concat(action.todo) };
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('Unhandled action type');
  }
};

export default todoReducer;
