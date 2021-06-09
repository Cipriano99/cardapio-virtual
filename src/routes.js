import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './pages/Layout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lanchonete" component={() => <Layout />} />
      </Switch>
    </Router>
  );
}
