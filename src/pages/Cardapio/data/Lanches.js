import { useEffect, useState } from 'react';

import { Animation } from '../../Data/animation';
import ItensCardapio from '../contents/ItensCardapio';

import { lanchesList } from '../../Data/lanchesList';

import { Container } from './styles';

export default function Lanches() {
  const [atualizarList, setAtualizarList] = useState(false);

  setTimeout(() => {
    Animation();
  }, 100);

  function ListLanche() {
    return lanchesList.map(
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
    ListLanche();
  }, [atualizarList]);

  return (
    <Container>
      {!atualizarList ? <ListLanche /> : setAtualizarList(!atualizarList)}
    </Container>
  );
}
