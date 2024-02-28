import React from 'react';
import Card from '../card/Card';
import useTodo from '../../hooks/useTodo';
import { useAppSelector } from '../../hooks/useRTK';

export default function List() {
  const { todos } = useTodo();
  const currentNav = useAppSelector((state) => state.navSlice.currentNav);

  const TODO_CARD = todos
    .filter((todo) => {
      switch (currentNav) {
        case 'ALL':
          return true;
        case 'DONE':
          return todo.isDone;
        case 'NOT_DONE':
          return !todo.isDone;
        default:
          return true;
      }
    })
    .map((todo) => <Card key={todo.id} todo={todo} />);

  const NOT_TODO_MESSAGE = <h2>{'h1'}</h2>;

  return (
    <section>
      {TODO_CARD.length ? <ul>{TODO_CARD}</ul> : NOT_TODO_MESSAGE}
    </section>
  );
}
