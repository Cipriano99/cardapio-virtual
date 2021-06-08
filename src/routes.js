import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Pedido from './pages/Pedido';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />

      <Route path="/cardapio" component={() => <Cardapio />} />
      <Route path="/pedido" component={() => <Pedido />} />

      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
}