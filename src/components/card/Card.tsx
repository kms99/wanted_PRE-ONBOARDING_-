import React, { useState } from 'react';
import { Inputs, Todo } from '../../types/types';
import Button from '../common/button/Button';
import useTodo from '../../hooks/useTodo';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../common/input/Input';
import { FormIds } from '../../types/enums';
import { inputValidationCheck } from '../../utils';
import TextArea from '../common/textarea/TextArea';

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
      id: `${todo.id}_isDone`,
      text: todo.isDone ? 'Cancel Done' : 'Done',
      handler: () => handleUpdateTodo(todo.id),
    },
    {
      id: `${todo.id}_delete`,
      text: 'delete',
      handler: () => handleDeleteTodo(todo.id),
    },
    { id: `${todo.id}_edit`, text: 'edit', handler: handleToggleEditMode },
  ];

  const CARD_EDIT_MODE_BUTTONS_INFO = [
    {
      isSubmit: true,
      id: `${todo.id}_editSave`,
      text: 'Save',
    },
    {
      isSubmit: false,
      id: `${todo.id}_editCancel`,
      text: 'Cancel',
      handler: handleToggleEditMode,
    },
  ];

  const NOT_EDIT_MODE_BUTTONS = CARD_BUTTONS_INFO.map((button) => (
    <Button
      key={button.id}
      isSubmit={false}
      text={button.text}
      handler={button.handler}
    />
  ));

  const EDIT_MODE_BUTTONS = CARD_EDIT_MODE_BUTTONS_INFO.map((button) => (
    <Button
      key={button.id}
      isSubmit={button.isSubmit}
      text={button.text}
      handler={button.handler}
    />
  ));

  if (toggleEditMode) {
    return (
      <li key={todo.id}>
        <form onSubmit={handleSubmit(handleEditSubmit)}>
          <div>
            <Input formId={FormIds.TITLE_VALUE} formRegister={register} />
            <TextArea formId={FormIds.CONTENTS_VALUE} formRegister={register} />
          </div>
          <div>{EDIT_MODE_BUTTONS}</div>
        </form>
      </li>
    );
  } else {
    return (
      <li key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.contents}</p>
        <div>{NOT_EDIT_MODE_BUTTONS}</div>
      </li>
    );
  }
}
