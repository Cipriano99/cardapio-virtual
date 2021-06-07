import { useEffect, useState } from 'react';

import { Animation } from '../../Data/animation';
import ItensCardapio from '../contents/ItensCardapio';

import { Container } from './styles';

import { bebidasList } from '../../Data/bebidasList';

export default function Bebidas() {
  const [atualizarList, setAtualizarList] = useState(false);

  setTimeout(() => {
    Animation();
  }, 100);

  function ListBebida() {
    return bebidasList.map(
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
    ListBebida();
  }, [atualizarList]);

  return (
    <Container>
      {!atualizarList ? <ListBebida /> : setAtualizarList(!atualizarList)}
    </Container>
  );
}
