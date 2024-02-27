import React from 'react';
import { SectionType } from '../../types/enums';
import Card from '../card/Card';
import useTodo from '../../hooks/useTodo';

interface Props {
  sectionInfo: SectionType;
}

export default function List({ sectionInfo }: Props) {
  const { todos } = useTodo();

  const TODO_CARD = todos
    .filter((todo) => !sectionInfo === todo.isDone)
    .map((todo) => <Card key={todo.id} todo={todo} />);

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
