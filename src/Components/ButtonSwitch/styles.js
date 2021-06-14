import styled from 'styled-components';

export const ContainerButton = styled.div`
  width: auto;
  height: 56px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  overflow-x: scroll;
`;

export const ButtonSelect = styled.div`
  min-width: 200px;
  max-width: 40vw;
  height: 28px;
  font-size: 16px;
  text-align: center;
  background-color: var(--secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 8px;

  transition: all 0.3s ease-in-out;

  &.ativo {
    background-color: var(--primary);
    color: var(--tertiary);
    font-weight: 700;
  }
`;
