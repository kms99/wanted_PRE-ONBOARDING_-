import React from 'react';
import { ButtonStyle } from '../../../types/enums';
import * as St from './button.styled';
interface Props {
  text: string;
  handler?: () => void;
  isSubmit: boolean;
  btnStyle: ButtonStyle;
}

export default function Button({ text, handler, isSubmit, btnStyle }: Props) {
  return (
    <St.CommonButton
      $style={btnStyle}
      onClick={handler}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </St.CommonButton>
  );
}
