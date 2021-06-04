import { Switch, Route, Redirect } from 'react-router-dom';
import Cardápio from './pages/Cardapio';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/cardapio" component={() => <Cardápio />} />
      <Route exact path="/pedido" component={() => <Home />} />

      <Redirect to="/" />
    </Switch>
  );
}
