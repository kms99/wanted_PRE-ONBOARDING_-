import { styled } from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  justify-content: space-between;
  border: 1px solid var(--sub-color);
  border-radius: 5px;

  & > h2 {
    border-bottom: 1px solid transparent;
    border-bottom: 1px solid var(--sub-color);
  }
  & > p {
    border: 1px solid transparent;
    overflow-y: scroll;
    white-space: pre-wrap;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  & > h2,
  & input {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0.2rem 0;
    height: 2.6rem;
  }

  & > p,
  & textarea {
    font-size: 1.2rem;
    padding: 0.2rem 0;
    height: 15rem;
  }

  & > div,
  & > form > div {
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    & > button + button {
      margin-left: 0.5rem;
    }
  }
`;
