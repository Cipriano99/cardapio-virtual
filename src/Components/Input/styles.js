import styled from 'styled-components';

export const InputComponent = styled.input`
  width: 100%;
  background: var(--bg-input);
  color: var(--text-input);
  text-align: center;
  font-size: 20px;
  height: 40px;
  padding: 8px 4px;
  border: 1px solid #fff8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  outline: none;

  transition: all 0.3s ease-in-out;

  &::placeholder {
    font-size: 18px;
    color: var(--quaternary);
  }
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
  }
`;

export const BodyInput = styled.div`
  width: 94%;
  max-width: 560px;

  margin: 0 auto 16px;
`;

export const Label = styled.div`
  display: grid;
  place-items: center;
  font-size: 20px;
`;
