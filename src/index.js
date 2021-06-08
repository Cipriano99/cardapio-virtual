import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './authContext';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
