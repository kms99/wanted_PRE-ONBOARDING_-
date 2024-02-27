import React from 'react';

interface Props {
  text: string;
  handler?: () => void;
}

export default function Button({ text, handler }: Props) {
  return <button onClick={handler}>{text}</button>;
}
