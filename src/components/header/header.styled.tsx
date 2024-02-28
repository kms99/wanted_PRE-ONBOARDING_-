import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;

  width: 100%;
  height: 15rem;

  background: red;

  & > h1 {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    color: var(--sub-color);
    font-weight: bold;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

export const HeaderDateArea = styled.div`
  display: flex;

  font-size: 2.5rem;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    display: flex;
    align-items: center;
    & > div:first-child {
      color: var(--sub-color);
      font-size: 6rem;
      margin-right: 1rem;
    }
    & > div :last-child {
      display: flex;
      flex-direction: column;
    }
  }
`;
