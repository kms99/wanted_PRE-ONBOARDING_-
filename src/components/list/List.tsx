import React from 'react';
import { SectionType } from '../../types/enums';
import Card from '../card/Card';
import useTodo from '../../hooks/useTodo';

interface Props {
  sectionInfo: SectionType;
}

export default function List() {
  const { todos } = useTodo();

  const TODO_CARD = todos
    .filter((todo) => {
      switch (sectionInfo) {
        case 0:
          return true;
        case 1:
          return true;
        default:
          return true;
      }
    })
    .map((todo) => <Card key={todo.id} todo={todo} />);

  const NOT_TODO_MESSAGE = (
    <h2>
      {sectionInfo
        ? 'Please complete todays tasks'
        : 'Please register todays tasks'}
    </h2>
  );

  return (
    <section>
      {TODO_CARD.length ? <ul>{TODO_CARD}</ul> : NOT_TODO_MESSAGE}
    </section>
  );
}
