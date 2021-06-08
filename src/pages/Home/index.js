import ButtonCardapio from './content/ButtonCardapio';

import logo from '../Data/assets/logo.png';

import { Container, Header, Logo } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>Bem-vindo(a) ao cardápio online</Header>
      <Logo>
        <img src={logo} alt="Logo Lanchonete" />
      </Logo>
      <ButtonCardapio>CARDÁPIO</ButtonCardapio>
    </Container>
  );
}
