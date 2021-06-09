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
  min-width: 64px;
  padding: 0 4px;
  font-size: 14px;
  text-align: center;
  background-color: var(--secondary);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &.ativo {
    background-color: var(--primary);
    color: var(--tertiary);
    width: 72px;
    font-weight: 700;
  }
`;

export const Icon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 16px;
`;

export const Name = styled.span``;
