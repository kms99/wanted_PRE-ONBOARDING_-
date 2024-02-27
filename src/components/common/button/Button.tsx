import React from 'react';

interface Props {
  text: string;
  handler?: () => void;
  isSubmit: boolean;
}

export default function Button({ text, handler, isSubmit }: Props) {
  return (
    <button onClick={handler} type={isSubmit ? 'submit' : 'button'}>
      {text}
    </button>
  );
}
