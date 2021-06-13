import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  width: 100%;
  max-width: 560px;

  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 48px auto 48px;
  grid-template-areas:
    'TOP'
    'MAI'
    'NAV';

  background-color: var(--tertiary);
`;

export const Top = styled.div`
  grid-area: TOP;
  width: 100%;
  max-width: 560px;
`;

export const Main = styled.div`
  grid-area: MAI;
  width: 100%;
  max-width: 560px;
`;

export const Bottom = styled.div`
  grid-area: NAV;
  width: 100%;
  max-width: 560px;

  background-color: var(--secondary);

  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);

  bottom: 0;
  position: fixed;
  z-index: 999;
`;
