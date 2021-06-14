import styled from 'styled-components';

export const ContainerButton = styled.div`
  height: 56px;
  width: 100%;
  max-width: 560px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--bg-navigation);
`;

export const ButtonSelect = styled.div`
  height: 48px;
  width: 80px;
  min-width: 64px;
  padding: 0 4px;
  font-size: 14px;
  text-align: center;
  color: var(--text-button-navigation-default);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &.ativo {
    background-color: var(--bg-button-navigation);
    color: var(--text-button-navigation);
    font-weight: 700;
  }
`;

export const Icon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 16px;
`;

export const Name = styled.span``;
