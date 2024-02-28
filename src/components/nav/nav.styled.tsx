import { styled } from 'styled-components';

export const Nav = styled.nav`
  margin: 5rem 0 2rem 0;
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
