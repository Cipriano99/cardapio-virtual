import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu Mono', monospace;
    
  }
  html, #root {
    height: 100%;
    user-select: none;
  }

body{
  width: 100%;
  max-width: 560px;
  height: 100%;
  margin: 0 auto;
  color: var(--quaternary)
}

  *, button, input {
    border: 0;
    outline: 0;
  }

  :root {
    --primary: #E26D3C;
    --secondary: #FDEAE6;
    --tertiary: #FFFFFF;
    --quaternary: #404551;
  }
`;
