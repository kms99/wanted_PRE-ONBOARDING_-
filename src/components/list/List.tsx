import React from 'react';
import Card from '../card/Card';
import useTodo from '../../hooks/useTodo';
import { useAppSelector } from '../../hooks/useRTK';
import * as St from './list.styled';

export default function List() {
  const { todos } = useTodo();
  const currentNav = useAppSelector((state) => state.navSlice.currentNav);

  const getNotTodoMessage = () => {
    switch (currentNav) {
      case 'ALL':
        return 'Please register a new task';
      case 'DONE':
        return 'Finish the scheduled tasks!';
      case 'NOT_DONE':
        return 'There are no tasks left to do';
      default:
        return true;
    }
  };

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

  const NOT_TODO_MESSAGE = <h2>{getNotTodoMessage()}</h2>;

  return (
    <St.ListContainer>
      {TODO_CARD.length ? <St.List>{TODO_CARD}</St.List> : NOT_TODO_MESSAGE}
    </St.ListContainer>
  );
}
