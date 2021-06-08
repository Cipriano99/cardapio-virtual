import styled from 'styled-components';

export const Container = styled.div`
  min-height: 80vh;

  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  height: 9rem;
  display: grid;
  place-content: center;
  font-size: 2rem;
  text-align: center;
  padding: 0 16px;
`;

export const Logo = styled.div`
  display: grid;
  place-items: center;

  img {
    width: 90%;
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Infomative = styled.div`
  height: 100%;
  margin-top: 32px;
  padding: 0 24px;
  text-align: center;
`;
