import { styled } from 'styled-components';
import { ButtonStyle } from '../../../types/enums';

export const CommonButton = styled.button<{ $style: ButtonStyle }>`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 3px;

  ${(props) =>
    props.$style === ButtonStyle.FILL &&
    `
    background: var(--sub-color);
    color: var(--primary-color);
  `}

  ${(props) =>
    props.$style === ButtonStyle.EMPTY &&
    `
    background: inherit;
    color: var(--sub-color);
    border-color: var(--sub-color);

    &:hover {
        background: var(--sub-color);
        color: var(--primary-color);
    }
  `}
  ${(props) =>
    props.$style === ButtonStyle.NAV &&
    `
    background: #dfe4ea;
    color: var(--sub-color);
    border:none;
    border-radius: unset;

    &:hover {
        background: var(--sub-color);
        color: var(--primary-color);
    }
  `}
  ${(props) =>
    props.$style === ButtonStyle.ACTIVE_NAV &&
    `
    background: inherit;
    color: var(--sub-color);
    border-color: var(--sub-color);
    border-bottom:none;
    border-radius: 3px 3px 0 0;
    font-weight:bold

  `}
`;
