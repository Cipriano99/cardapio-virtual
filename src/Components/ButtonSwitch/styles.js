import styled from 'styled-components';

export const ContainerButton = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonSelect = styled.div`
  width: auto;
  min-width: 144px;
  height: 28px;
  font-size: 16px;
  text-align: center;
  background-color: var(--secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 12px;
  padding: 0 16px;

  &.ativo {
    background-color: var(--primary);
    color: var(--tertiary);
    font-weight: 700;
  }
`;
