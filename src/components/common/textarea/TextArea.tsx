import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormIds } from '../../../types/enums';
import { Inputs } from '../../../types/types';
import * as St from './textarea.styled';

interface Props {
  formRegister: UseFormRegister<Inputs>;
  formId: FormIds;
  placeholder?: string;
}

export default function TextArea({ formRegister, formId, placeholder }: Props) {
  return (
    <St.CommonTextarea placeholder={placeholder} {...formRegister(formId)} />
  );
}
