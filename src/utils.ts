import { InputValue } from './types/types';

export const inputValidationCheck = ({ title, contents }: InputValue) => {
  const checkTitle = title.trim();
  const checkContents = contents.trim();

  if (!checkTitle || !checkContents) return false;
  return true;
};
