import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 560px;
  height: 3.5rem;

  background-color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px 12px 0 0;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);

  bottom: 0;
  position: fixed;
  z-index: 100;

  button {
    height: 32px;
    width: 240px;
  }
`;
