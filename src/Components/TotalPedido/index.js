import { Container, Title } from './styles';

export default function TotalPedido(props) {
  return (
    <Container>
      <Title>{props.entrega || 'Pedido'}</Title>
      <Title>R${props.priceTotal}</Title>
    </Container>
  );
}
