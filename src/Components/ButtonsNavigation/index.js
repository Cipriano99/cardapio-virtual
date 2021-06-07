import ButtonMain from '../ButtonMain';
import { Container } from './styles';

function ButtonsNavigation(props) {
  return (
    <Container>
      <ButtonMain>Voltar</ButtonMain>
      <ButtonMain>Continuar</ButtonMain>
    </Container>
  );
}

export default ButtonsNavigation;
