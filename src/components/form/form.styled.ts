import { styled } from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: red; */

  max-height: ${(props) => (props.$isOpen ? '300px' : '0px')};
  overflow-y: hidden;

  transition: 0.5s ease-in-out;

  padding: ${(props) => (props.$isOpen ? '2rem' : '0')};

  & > input {
    margin-bottom: 1rem;
  }

  & > textarea {
    height: 200px;
    margin-bottom: 1rem;
  }
`;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: relative;
  left: ${(props) => (props.$isOpen ? '50%' : '0')};
  transform: translateX(
    ${(props) => (props.$isOpen ? 'calc(-50% - 2rem)' : '0')}
  );
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  min-width: 12rem;
  padding: 0;

  & > div {
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background: var(--sub-color);
    padding: 1.5rem;
    border-radius: 50%;
  }

  & > div::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 5px;
    background: var(--color-white);
  }

  & > div::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: ${(props) => (props.$isOpen ? '0' : '2rem')};
    transition: 0.5s;
    height: 5px;
    background: var(--color-white);
  }

  & > span {
    width: 8.5rem;
  }
`;
