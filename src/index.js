import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './Context';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Routes />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
