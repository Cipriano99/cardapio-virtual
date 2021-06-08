import { useEffect, useState } from 'react';

import { Animation } from '../../Data/animation';
import ItensCardapio from '../contents/ItensCardapio';

import { Container } from './styles';

export default function Item(props) {
  const [atualizarList, setAtualizarList] = useState(false);

  setTimeout(() => {
    Animation();
  }, 100);

  function ListItems() {
    return props.items.map(
      (item, index) =>
        !item.state && (
          <ItensCardapio
            key={index}
            description={item}
            update={setAtualizarList}
          />
        )
    );
  }

  useEffect(() => {
    ListItems();
  });

  return (
    <Container>
      {!atualizarList ? <ListItems /> : setAtualizarList(!atualizarList)}
    </Container>
  );
}
