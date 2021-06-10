import { useState } from 'react';

import ListaPedido from '../../Pedido/contents/ListaPedido';

import { allListItems } from '../../Data';

import { Container } from './styles';

export default function Lista() {
  const [atualizar, setAtualizar] = useState(true);

  const ListLanches = () =>
    allListItems.map(
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
