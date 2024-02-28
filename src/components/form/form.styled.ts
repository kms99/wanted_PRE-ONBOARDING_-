import { styled } from 'styled-components';

export const FormContainer = styled.form<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;

  max-height: ${(props) => (props.$isOpen ? '1000px' : '0px')};
  overflow-y: hidden;

  transition: 0.5s ease-in-out;
`;
