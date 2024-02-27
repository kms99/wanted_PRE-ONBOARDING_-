import React from 'react';
import { SectionType } from '../../types/enums';
import { useAppSelector } from '../../hooks/useRTK';
import Card from '../card/Card';

interface Props {
  sectionInfo: SectionType;
}
export default function List({ sectionInfo }: Props) {
  const todos = useAppSelector((state) => state.todoSlice.todos).filter(
    (todo) => !sectionInfo === todo.isDone,
  );

  const TODO_CARD = todos.map((todo) => <Card key={todo.id} todo={todo} />);

  return (
    <section>
      <h2>{sectionInfo ? 'Done' : 'Not Done'}</h2>
      <ul>
        {/* TODO: 리스트 아이템 컴포넌트 분리, 삭제버튼 및 로직 추가, 업데이트 로직 추가 */}
        {TODO_CARD}
      </ul>
    </section>
  );
}
