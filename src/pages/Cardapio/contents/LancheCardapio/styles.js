import styled from 'styled-components';

export const Container = styled.div`
  width: 94%;
  min-width: 304px;
  background-color: var(--secondary);

  display: grid;
  grid-template-columns: 128px auto;
  grid-template-rows: auto;
  grid-template-areas:
    'IMG DES'
    'BTN BTN';

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin: 24px auto;
`;

export const ImagemLanche = styled.div`
  grid-area: IMG;

  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Img = styled.div`
  img {
    width: 96px;
    height: 96px;
    border-radius: 8px;
  }
`;

export const Lanche = styled.div`
  grid-area: DES;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NomeLanche = styled.h3`
  margin-bottom: 4px;
`;

export const DescriçãoLanche = styled.p`
  font-size: 10px;
  padding: 0 12px 0 0;
`;

export const PreçoLanche = styled.h4`
  margin: 8px 0 0;
`;

export const Adicionar = styled.div`
  grid-area: BTN;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
