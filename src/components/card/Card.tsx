import React, { useState } from 'react';
import { Inputs, Todo } from '../../types/types';
import Button from '../common/button/Button';
import useTodo from '../../hooks/useTodo';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../common/input/Input';
import { ButtonStyle, FormIds } from '../../types/enums';
import { inputValidationCheck } from '../../utils';
import TextArea from '../common/textarea/TextArea';
import * as St from './card.styled';

interface Props {
  todo: Todo;
}

export default function Card({ todo }: Props) {
  const { handleDeleteTodo, handleUpdateTodo, handleEditTodo } = useTodo();

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const [toggleEditMode, setToggleEditMode] = useState<boolean>(false);

  const handleEditSubmit: SubmitHandler<Inputs> = (value) => {
    if (
      !inputValidationCheck({
        title: value.titleValue,
        contents: value.contentsValue,
      })
    ) {
      alert('모든 값을 입력하세요');
      return;
    }

    handleEditTodo({
      id: todo.id,
      title: value.titleValue,
      contents: value.contentsValue,
    });
    handleToggleEditMode();
  };

  const handleToggleEditMode = () => {
    setToggleEditMode((prevState) => {
      if (!prevState) {
        setValue(FormIds.TITLE_VALUE, todo.title);
        setValue(FormIds.CONTENTS_VALUE, todo.contents);
      }
      return !prevState;
    });
  };

  const CARD_BUTTONS_INFO = [
    {
      id: `${todo.id}_edit`,
      text: 'edit',
      handler: handleToggleEditMode,
      style: ButtonStyle.EMPTY,
    },
    {
      id: `${todo.id}_delete`,
      text: 'delete',
      handler: () => handleDeleteTodo(todo.id),
      style: ButtonStyle.EMPTY,
    },
    {
      id: `${todo.id}_isDone`,
      text: todo.isDone ? 'Cancel Done' : 'Done',
      handler: () => handleUpdateTodo(todo.id),
      style: ButtonStyle.FILL,
    },
  ];

  const CARD_EDIT_MODE_BUTTONS_INFO = [
    {
      isSubmit: false,
      id: `${todo.id}_editCancel`,
      text: 'Cancel',
      handler: handleToggleEditMode,
      style: ButtonStyle.EMPTY,
    },
    {
      isSubmit: true,
      id: `${todo.id}_editSave`,
      text: 'Save',
      style: ButtonStyle.FILL,
    },
  ];

  const NOT_EDIT_MODE_BUTTONS = CARD_BUTTONS_INFO.map((button) => (
    <Button
      key={button.id}
      isSubmit={false}
      text={button.text}
      handler={button.handler}
      btnStyle={button.style}
    />
  ));

  const EDIT_MODE_BUTTONS = CARD_EDIT_MODE_BUTTONS_INFO.map((button) => (
    <Button
      key={button.id}
      isSubmit={button.isSubmit}
      text={button.text}
      handler={button.handler}
      btnStyle={button.style}
    />
  ));

  if (toggleEditMode) {
    return (
      <St.CardItem key={todo.id}>
        <form onSubmit={handleSubmit(handleEditSubmit)}>
          <Input formId={FormIds.TITLE_VALUE} formRegister={register} />
          <TextArea formId={FormIds.CONTENTS_VALUE} formRegister={register} />
          <div>{EDIT_MODE_BUTTONS}</div>
        </form>
      </St.CardItem>
    );
  } else {
    return (
      <St.CardItem key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.contents}</p>
        <div>{NOT_EDIT_MODE_BUTTONS}</div>
      </St.CardItem>
    );
  }
}
