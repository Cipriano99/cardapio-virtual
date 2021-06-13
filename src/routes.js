import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './pages/Layout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lanchonete" component={() => <Layout id="0" />} />

        <Route exact path="/lanchonete2" component={() => <Layout id="1" />} />

        <Route component={() => <Redirect to="/lanchonete" />} />
      </Switch>
    </Router>
  );
}
