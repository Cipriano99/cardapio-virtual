import { useEffect, useState } from 'react';

import { Animation } from '../../Data/animation';
import ItensCardapio from '../contents/ItensCardapio';

import { drinksList } from '../../Data/drinksList';

import { Container } from './styles';

export default function Drinks() {
  const [atualizarList, setAtualizarList] = useState(false);

  setTimeout(() => {
    Animation();
  }, 100);

  function ListDrinks() {
    return drinksList.map(
      (lanche, index) =>
        !lanche.state && (
          <ItensCardapio
            key={index}
            description={lanche}
            update={setAtualizarList}
          />
        )
    );
  }

  useEffect(() => {
    ListDrinks();
  }, [atualizarList]);

  return (
    <Container>
      {!atualizarList ? <ListDrinks /> : setAtualizarList(!atualizarList)}
    </Container>
  );
}
