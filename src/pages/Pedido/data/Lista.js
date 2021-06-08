import { useState } from 'react';

import { lanchesList } from '../../Data/lanchesList';
import { sucosList } from '../../Data/sucosList';
import { bebidasList } from '../../Data/bebidasList';
import { drinksList } from '../../Data/drinksList';

import ListaPedido from '../../Pedido/contents/ListaPedido';

import { Container } from './styles';

export default function Lista() {
  const [atualizar, setAtualizar] = useState(true);

  const category = [
    ...lanchesList,
    ...sucosList,
    ...bebidasList,
    ...drinksList,
  ];

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
