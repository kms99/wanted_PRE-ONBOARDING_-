import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../common/input/Input';
import { InputValue, Inputs } from '../../types/types';
import { FORM_INPUTS } from './constants';
import Button from '../common/button/Button';
import { FormIds } from '../../types/enums';
import useTodo from '../../hooks/useTodo';
import { inputValidationCheck } from '../../utils';

export default function Form() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { handleAddTodo } = useTodo();

  const handleReset = () => {
    reset({
      [FormIds.titleValue]: '',
      [FormIds.contentsValue]: '',
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
    console.log(value);
    handleAdd({ title: value.titleValue, contents: value.contentsValue });
  };

  const FORM_BUTTONS = [
    {
      text: 'ADD',
      isSubmit: true,
    },
    {
      text: 'RESET',
      handler: handleReset,
      isSubmit: false,
    },
  ];

  const INPUTS = FORM_INPUTS.map((input) => (
    <Input
      key={input.formId}
      formRegister={register}
      placeholder={input.placeholder}
      formId={input.formId}
    />
  ));

  const BUTTONS = FORM_BUTTONS.map((button) => (
    <Button
      key={`button_${button.text}`}
      text={button.text}
      handler={button.handler}
      isSubmit={button.isSubmit}
    />
  ));

  return (
    <form onSubmit={handleSubmit(handleTodoSubmit)}>
      {INPUTS}
      <div>{BUTTONS}</div>
    </form>
  );
}
