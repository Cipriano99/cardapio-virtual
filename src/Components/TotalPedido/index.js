import { Container, Title } from './styles';

function TotalPedido(props) {
  return (
    <Container>
      <Title>Total</Title>
      <Title>R${props.priceTotal}</Title>
    </Container>
  );
}

export default TotalPedido;
