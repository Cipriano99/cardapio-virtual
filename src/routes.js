import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './pages/Layout';
import Starter from './start';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Starter />} />

        <Route exact path="/lanchonete" component={() => <Layout id="0" />} />

        <Route exact path="/lanchonete2" component={() => <Layout id="1" />} />

        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
