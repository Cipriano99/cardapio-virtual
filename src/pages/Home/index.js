import logo from '../Data/assets/logo.png';

import { Container, Header, Logo, Infomative, P } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <Header>Bem-vindo(a) ao cardápio online</Header>
        <Logo>
          <img src={logo} alt="Logo Lanchonete" />
        </Logo>
      </Container>

      <Infomative>
        <h3>Informartivo</h3>
        ⬇️
        <br />
        <br />
        <P>
          Clique em <b>Cardápio</b> para visualizar todas as categorias e
          opções. <br />
          <br />
          Clique em <b>Pedido</b> para visualizar e definir quantidade de cada
          item do seu pedido. <br />
          <br />
          Clique em <b>Finalizar</b> para informar como deseja receber o seu
          pedido.
        </P>
        <P>
          Ao clicar em adicionar, o item irá automaticamente para o seu pedido e
          logo poderá definir quantas unidades deseja.
        </P>
        <P>
          Nenhuma informação pessoal ficará salva. Assim que finalizar, todos os
          dados serão excluídos.
        </P>
        <P>Se você recarregar qualquer página, todo o processo será perdido.</P>
        <P>
          <i>Bon appetit!</i>
        </P>
      </Infomative>
    </>
  );
}
