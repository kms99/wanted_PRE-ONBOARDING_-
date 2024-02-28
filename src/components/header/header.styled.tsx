import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  width: 100%;
  display: flex;

  & > h1 {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }
`;
