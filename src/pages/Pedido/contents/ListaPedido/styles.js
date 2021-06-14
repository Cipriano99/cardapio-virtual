import styled from 'styled-components';

export const Container = styled.section`
  width: 94%;
  min-width: 304px;
  background-color: var(--bg-lanche);

  display: grid;
  grid-template-columns: 80px auto 120px;
  grid-template-rows: auto;
  grid-template-areas: 'IMG DES CNT';

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin: 24px auto;

  transition: opacity 0.3s ease-in;
`;

export const ImagemLanche = styled.div`
  grid-area: IMG;

  display: flex;
  justify-content: center;
  margin: 12px 0;
`;

export const Img = styled.div`
  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Lanche = styled.div`
  grid-area: DES;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px 8px;
`;

export const NomeLanche = styled.h3``;

export const PreçoLanche = styled.h4``;

export const Controle = styled.div`
  grid-area: CNT;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 16px 8px;
`;

export const Quantidade = styled.div`
  display: flex;
`;

export const Menos = styled.div`
  width: 28px;
  height: 24px;

  display: grid;
  place-items: center;

  background-color: var(--bg-button);
  color: var(--tertiary);
  font-weight: 700;

  border-radius: 12px 0px 0px 12px;
`;

export const Unidades = styled.div`
  width: 40px;
  height: 24px;

  display: grid;
  place-items: center;

  background-color: var(--tertiary);
`;

export const Mais = styled.div`
  width: 28px;
  height: 24px;

  display: grid;
  place-items: center;

  background-color: var(--bg-button);
  color: var(--tertiary);
  font-weight: 700;

  border-radius: 0px 12px 12px 0px;
`;

export const Remover = styled.div`
  cursor: pointer;
`;

export const SemItems = styled.h2``;
