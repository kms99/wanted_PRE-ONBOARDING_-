import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../common/input/Input';
import { InputValue, Inputs } from '../../types/types';
import { FORM_INPUTS } from './constants';
import Button from '../common/button/Button';
import { useAppDispatch } from '../../hooks/useRTK';
import { addTodo } from '../../store/slice/todoSlice';

export default function Form() {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const handleAdd = ({ title, contents }: InputValue) => {
    //TODO: validation check
    dispatch(addTodo({ title, contents }));
  };
  const handleReset = () => {};

  const handleTodoSubmit: SubmitHandler<Inputs> = (value) => {
    console.log(value);
    handleAdd({ title: value.titleValue, contents: value.contentsValue });
  };

  const FORM_BUTTONS = [
    {
      text: 'ADD',
    },
    {
      text: 'RESET',
      handler: handleReset,
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
    />
  ));

  return (
    <form onSubmit={handleSubmit(handleTodoSubmit)}>
      {INPUTS}
      <div>{BUTTONS}</div>
    </form>
  );
}
