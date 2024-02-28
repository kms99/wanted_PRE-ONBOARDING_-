import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormIds } from '../../../types/enums';
import { Inputs } from '../../../types/types';

interface Props {
  formRegister: UseFormRegister<Inputs>;
  formId: FormIds;
  placeholder?: string;
}

export default function TextArea({ formRegister, formId, placeholder }: Props) {
  return <textarea placeholder={placeholder} {...formRegister(formId)} />;
}
