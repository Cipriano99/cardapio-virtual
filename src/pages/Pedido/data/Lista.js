import { useState } from 'react';

import { lanchesList } from '../../Data/lanchesList';
import { bebidasList } from '../../Data/bebidasList';

import ListaPedido from '../../Pedido/contents/ListaPedido';

import { Container } from './styles';

export default function Lista() {
  const [atualizar, setAtualizar] = useState(true);

  const category = [...lanchesList, ...bebidasList];

  const ListLanches = () =>
    category.map(
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
