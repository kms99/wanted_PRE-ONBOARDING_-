import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../common/input/Input';
import { Inputs } from '../../types/types';
import { FormIds } from '../../types/enums';

export default function Form() {
  const { register, handleSubmit, formState } = useForm<Inputs>();

  const handleTodoSubmit: SubmitHandler<Inputs> = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(handleTodoSubmit)}>
      <Input
        formRegister={register}
        placeholder="title"
        formId={FormIds.titleValue}
      />
      <Input
        formRegister={register}
        placeholder="contents"
        formId={FormIds.contentsValue}
      />
      <button>초기화</button>
      <button>입력</button>
    </form>
  );
}
