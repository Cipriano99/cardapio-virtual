import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
