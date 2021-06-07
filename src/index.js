import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './authContext';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyles />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
