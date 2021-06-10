import styled from 'styled-components';
import ReactSelect from 'react-select';

export const SelectOptions = styled(ReactSelect)`
  width: 100%;

  margin-bottom: 16px;
`;

export const Label = styled.div`
  display: grid;
  place-items: center;
  font-size: 20px;
`;

export const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'var(--secondary)',
    color: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    height: '40px',
    width: '95%',
    margin: '4px auto',
    borderRadius: '4px',
    paddingLeft: '8px',
    fontSize: '20px',
  }),
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: 'var(--secondary)',
      color: 'var(--quaternary)',
      height: '32px',
      width: '96%',
      margin: '0 auto',
      paddingTop: '12px',
      paddingLeft: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid var(--primary)',

      ':active': {
        ...styles[':active'],
        backgroundColor: 'var(--secondary)',
      },

      ':hover': {
        backgroundColor: 'var(--secondary)',
      },
    };
  },
  input: (styles) => ({
    ...styles,
    color: 'var(--quaternary)',
    fontSize: '20px',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'var(--quaternary)',
    fontSize: '16px',
  }),
  singleValue: (styles) => ({ ...styles, color: 'var(--quaternary)' }),
};
