import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 9rem;
  display: grid;
  place-content: center;
  font-size: 2.4rem;
  text-align: center;
`;

export const Logo = styled.div`
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;
