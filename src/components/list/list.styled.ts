import { styled } from 'styled-components';

export const ListContainer = styled.section`
  width: 100%;
`;
export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 1rem;
`;
