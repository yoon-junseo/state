import React, { useState, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';
import { FaPen } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { ITodoTypes } from '@/recoil/todo';

import { Wrapper, IconWrapper, StyledInput, Text } from './style';

interface ITodoItemProps extends ITodoTypes {
  todoList: ITodoTypes[];
  onClickDone: (id: number) => void;
  onClickDelete: (id: number) => void;
  setTodoList: SetterOrUpdater<ITodoTypes[]>;
}

interface IEditStatus {
  id: number;
  editable: boolean;
}

const TodoItem = ({ id, text, done, todoList, onClickDone, onClickDelete, setTodoList }: ITodoItemProps) => {
  const [editText, setEditText] = useState<string>('');
  const [editStatus, setEditStatus] = useState<IEditStatus>({
    id: 0,
    editable: false,
  });

  const onClickEdit = useCallback(
    (id: number) => {
      if (editStatus.editable) {
        setTodoList(todoList.map((todo: ITodoTypes) => (todo.id === id ? { ...todo, text: editText } : todo)));
        setEditStatus({
          id,
          editable: false,
        });
        return;
      }

      setEditStatus({
        id,
        editable: true,
      });
      setEditText(text);
    },
    [editText, editStatus],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditText(e.target.value);
    },
    [editText, setEditText],
  );

  return (
    <Wrapper>
      {editStatus.editable ? (
        <StyledInput value={editText} onChange={onChange} />
      ) : (
        <Text done={done} onClick={() => onClickDone(id)}>
          {text}
        </Text>
      )}
      <IconWrapper>
        <FaPen onClick={() => onClickEdit(id)} />
        <MdClose onClick={() => onClickDelete(id)} />
      </IconWrapper>
    </Wrapper>
  );
};

export default TodoItem;
