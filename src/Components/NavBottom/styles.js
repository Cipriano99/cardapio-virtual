import styled from 'styled-components';

export const ContainerButton = styled.div`
  height: 64px;
  width: 100%;
  max-width: 560px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonSelect = styled.div`
  height: 48px;
  min-width: 88px;
  padding: 0 4px;
  font-size: 16px;
  text-align: center;
  background-color: var(--secondary);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.ativo {
    background-color: var(--primary);
    color: var(--tertiary);
    font-weight: 700;
  }
`;

export const Icon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 16px;
`;

export const Name = styled.span``;
