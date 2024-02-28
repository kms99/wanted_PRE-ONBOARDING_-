import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../common/input/Input';
import { InputValue, Inputs } from '../../types/types';
import Button from '../common/button/Button';
import { FormIds, ButtonStyle } from '../../types/enums';
import useTodo from '../../hooks/useTodo';
import { inputValidationCheck } from '../../utils';
import TextArea from '../common/textarea/TextArea';
import * as St from './form.styled';

export default function Form() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { handleAddTodo } = useTodo();
  const [toggleForm, setToggleForm] = useState<boolean>(false);
  const [buttonMessage, setButtonMessage] = useState<string>('Open');
  const isFirstRun = useRef(true);

  const handleReset = () => {
    reset({
      [FormIds.TITLE_VALUE]: '',
      [FormIds.CONTENTS_VALUE]: '',
    });
  };

  const handleAdd = ({ title, contents }: InputValue) => {
    if (!inputValidationCheck({ title, contents })) {
      alert('모든 값을 입력하세요');
      return;
    }

    handleAddTodo({ title, contents });
    handleReset();
  };

  const handleTodoSubmit: SubmitHandler<Inputs> = (value) => {
    handleAdd({ title: value.titleValue, contents: value.contentsValue });
  };

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setTimeout(() => setButtonMessage(toggleForm ? 'CLOSE' : 'ADD'), 450);
  }, [toggleForm]);

  const FORM_BUTTONS = [
    {
      text: 'RESET',
      handler: handleReset,
      isSubmit: false,
      style: ButtonStyle.EMPTY,
    },
    {
      text: 'ADD',
      isSubmit: true,
      style: ButtonStyle.FILL,
    },
  ];

  const BUTTONS = FORM_BUTTONS.map((button) => (
    <Button
      key={`button_${button.text}`}
      text={button.text}
      handler={button.handler}
      isSubmit={button.isSubmit}
      btnStyle={button.style}
    />
  ));

  return (
    <St.FormContainer>
      <St.ToggleButton onClick={handleToggleForm} $isOpen={toggleForm}>
        <div />
        <span>{buttonMessage}</span>
      </St.ToggleButton>

      <St.Form onSubmit={handleSubmit(handleTodoSubmit)} $isOpen={toggleForm}>
        <Input
          formId={FormIds.TITLE_VALUE}
          formRegister={register}
          placeholder="title (1~12)"
        />
        <TextArea
          formId={FormIds.CONTENTS_VALUE}
          formRegister={register}
          placeholder="contents"
        />
        <div>{BUTTONS}</div>
      </St.Form>
    </St.FormContainer>
  );
}
