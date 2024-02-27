import React from 'react';
import { Todo } from '../../types/types';
import Button from '../common/button/Button';
import { useAppDispatch } from '../../hooks/useRTK';
import { updateTodo } from '../../store/slice/todoSlice';

interface Props {
  todo: Todo;
}

export default function Card({ todo }: Props) {
  const dispatch = useAppDispatch();

  const handleUpdateTodo = (id: number) => {
    dispatch(updateTodo(id));
  };

  return (
    <li key={todo.id}>
      <h2>{todo.title}</h2>
      <p>{todo.contents}</p>
      <Button
        isSubmit={false}
        text={todo.isDone ? 'Cancel Done' : 'Done'}
        handler={() => handleUpdateTodo(todo.id)}
      />
    </li>
  );
}
