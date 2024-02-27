import React from 'react';
import { SectionType } from '../../types/enums';
import { useAppDispatch, useAppSelector } from '../../hooks/useRTK';
import Button from '../common/button/Button';
import { updateTodo } from '../../store/slice/todoSlice';

interface Props {
  sectionInfo: SectionType;
}
export default function List({ sectionInfo }: Props) {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todoSlice.todos).filter(
    (todo) => !sectionInfo === todo.isDone,
  );

  const handleUpdateTodo = (id: number) => {
    dispatch(updateTodo(id));
  };
  return (
    <section>
      <h2>{sectionInfo ? 'Done' : 'Not Done'}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.contents}</p>
            <Button
              isSubmit={false}
              text={sectionInfo ? 'Cancel Done' : 'Done'}
              handler={() => handleUpdateTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
