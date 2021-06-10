import { useTotalPedido } from '../../Context';

import TitlePage from '../../Components/TitlePage';
import Divisor from '../../Components/Divisor';
import TotalPedido from '../../Components/TotalPedido';

import Lista from './data/Lista';

import { Container, SemLista } from './styles';

export default function Pedido() {
  const { totalPedido } = useTotalPedido();

  return (
    <Container>
      <TitlePage>Seu Pedido</TitlePage>
      <Divisor />

      {totalPedido < 1 ? (
        <SemLista>Você ainda não adicionou itens ao seu pedido. 👀</SemLista>
      ) : (
        <Lista />
      )}

      <Divisor />
      <TotalPedido priceTotal={parseFloat(totalPedido).toFixed(2)} />
      <Divisor />
    </Container>
  );
}
