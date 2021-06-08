import { useEffect, useState } from 'react';

import { Animation } from '../../Data/animation';
import ItensCardapio from '../contents/ItensCardapio';

import { sucosList } from '../../Data/sucosList';

import { Container } from './styles';

export default function Sucos() {
  const [atualizarList, setAtualizarList] = useState(false);

  setTimeout(() => {
    Animation();
  }, 100);

  function ListSucos() {
    return sucosList.map(
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
    ListSucos();
  }, [atualizarList]);

  return (
    <Container>
      {!atualizarList ? <ListSucos /> : setAtualizarList(!atualizarList)}
    </Container>
  );
}
