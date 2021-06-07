import { useTotalPedido } from '../../authContext';

import TopBar from '../../Components/TopBar';
import TitlePage from '../../Components/TitlePage';
import Divisor from '../../Components/Divisor';
import ButtonsBottom from './contents/ButtonsBottom';
import TotalPedido from '../../Components/TotalPedido';

import Lista from './data/Lista';

import { Container } from './styles';

export default function Pedido() {
  const { totalPedido } = useTotalPedido();

  return (
    <Container>
      <TopBar />
      <TitlePage>Seu Pedido</TitlePage>
      <Divisor />

      <Lista />

      <Divisor />
      <TotalPedido priceTotal={parseFloat(totalPedido).toFixed(2)} />
      <Divisor />

      <ButtonsBottom />
    </Container>
  );
}
