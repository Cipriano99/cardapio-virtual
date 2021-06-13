import { useState } from 'react';

import ListaPedido from '../../Pedido/contents/ListaPedido';

import { useOnLanchonete } from '../../../Context';

import { Container } from './styles';

export default function Lista() {
  const { onLanchonete } = useOnLanchonete();
  const [atualizar, setAtualizar] = useState(true);

  const ListLanches = () =>
    onLanchonete.cardapio.map(
      (lanche, index) =>
        lanche.state && (
          <ListaPedido key={index} description={lanche} update={setAtualizar} />
        )
    );

  return (
    <Container>
      {!atualizar ? <ListLanches /> : setAtualizar(!atualizar)}
    </Container>
  );
}
