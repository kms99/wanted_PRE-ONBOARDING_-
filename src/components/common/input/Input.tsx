import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormIds } from '../../../types/enums';
import { Inputs } from '../../../types/types';
import * as St from './input.styled';

interface Props {
  formRegister: UseFormRegister<Inputs>;
  formId: FormIds;
  placeholder?: string;
}

export default function Input({ formRegister, formId, placeholder }: Props) {
  return (
    <St.CommonInput
      maxLength={12}
      placeholder={placeholder}
      {...formRegister(formId, { maxLength: 12 })}
    />
  );
}
