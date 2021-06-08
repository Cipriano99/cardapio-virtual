import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './pages/Layout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/lanchonete" component={() => <Layout />} />

      <Route component={() => <Redirect to="/lanchonete" />} />
    </Switch>
  );
}
