import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 560px;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button:nth-child(1) {
    background-color: var(--secondary);
    color: var(--quaternary);
    font-weight: 400;
  }
`;
