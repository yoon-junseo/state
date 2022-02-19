import { atom, selector } from 'recoil';

export interface ITodoTypes {
  id: number;
  text: string;
  done: boolean;
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export const todoListState = atom<ITodoTypes[]>({
  key: 'todoList',
  default: [
    {
      id: 1,
      text: '밥먹기',
      done: false,
    },
    {
      id: 2,
      text: '놀기',
      done: false,
    },
    {
      id: 3,
      text: '똥싸기',
      done: false,
    },
  ],
});

export const todoListLengthState = selector<number>({
  key: 'todoListLength',
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList.length;
  },
});
