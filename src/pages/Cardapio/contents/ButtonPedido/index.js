import { History } from '../../../../history';

import ButtonMain from '../../../../Components/ButtonMain';

import { Container } from './styles';

function ButtonPedido() {
  const history = History();

  return (
    <Container>
      <ButtonMain action={() => history.push('/')}>ACESSAR PEDIDO</ButtonMain>
    </Container>
  );
}

export default ButtonPedido;
