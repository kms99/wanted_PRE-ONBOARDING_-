import { styled } from 'styled-components';

export const Nav = styled.nav`
  margin-top: 5rem;
  width: 100%;
`;
export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  & > li {
    width: 100%;

    & > button {
      width: 100%;
    }
  }
`;
