import { History } from '../../../../history';

import ButtonMain from '../../../../Components/ButtonMain';

import { Container } from './styles';

export default function ButtonPedido() {
  const history = History();

  return (
    <Container>
      <ButtonMain action={() => history.push('#')}>Concluir</ButtonMain>
    </Container>
  );
}
