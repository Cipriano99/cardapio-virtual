import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  width: 100%;
  max-width: 560px;

  padding-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.h3`
  margin-top: 16px;
`;

export const MenusList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 360px;
`;

export const MenuItem = styled.div`
  width: 90%;
  height: 48px;
  background-color: #41444b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  margin: 16px 0;
`;
