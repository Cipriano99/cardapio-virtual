import TitlePage from '../Components/TitlePage';
import Cipriano from '../pages/Layout/cipriano';

import { History } from '../history';

import { Container, TitleSection, MenusList, MenuItem } from './styles';

export default function start() {
  const history = History();

  return (
    <Container>
      <TitlePage>Bem-vindo(a) ao cardápio virtual</TitlePage>

      <TitleSection>Lanchonetes</TitleSection>

      <MenusList>
        <MenuItem onClick={() => history.push('/lanchonete')}>
          Lanchonete Exemplo
        </MenuItem>

        <MenuItem onClick={() => history.push('/lanchonete')}>
          Lanchonete Exemplo
        </MenuItem>

        <MenuItem onClick={() => history.push('/lanchonete')}>
          Lanchonete Exemplo
        </MenuItem>
      </MenusList>

      <Cipriano />
    </Container>
  );
}
