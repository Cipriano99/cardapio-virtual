import logo from '../Data/assets/logo.png';

import { Container, Header, Logo, Infomative } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>Bem-vindo(a) ao cardápio online</Header>
      <Logo>
        <img src={logo} alt="Logo Lanchonete" />
      </Logo>

      <Infomative>
        <br />
        <br />
        <br />
        <h3>Informartivo</h3>
        <br />
        <p>
          Ao clicar em adicionar, o item irá automaticamente para o seu pedido e
          logo poderá definir quantas unidades deseja.
        </p>
        <br />
        <br />
        <br />
        <p>
          Nenhuma informação pessoal ficará salva. Assim que finalizar, todos os
          dados serão excluídos.
        </p>
        <br />
        <br />
        <br />
        <p>Se você recarregar qualquer página, todo o processo será perdido.</p>
      </Infomative>
    </Container>
  );
}
