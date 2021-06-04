import { History } from '../../../../history';

import ButtonMain from '../../../../Components/ButtonMain';

import { Container } from './styles';

export default function ButtonCardapio() {
  const history = History();

  return (
    <Container>
      <ButtonMain action={() => history.push('/cardapio')}>
        ACESSAR CARDÁPIO
      </ButtonMain>
    </Container>
  );
}
