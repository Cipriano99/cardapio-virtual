import { useEffect, useState } from 'react';

import BebidaCardapio from '../contents/BebidaCardapio';
import beer from './assets/beer.png';

import { Container } from './styles';

export const bebidasList = [
  {
    type: 'bebida',
    img: beer,
    name: 'Nome da bebida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'bebida',
    img: beer,
    name: 'Nome da bebida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'bebida',
    img: beer,
    name: 'Nome da bebida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'bebida',
    img: beer,
    name: 'Nome da bebida',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
];

export default function Bebidas() {
  const [atualizarList, setAtualizarList] = useState(false);

  function ListBebida() {
    return bebidasList.map(
      (lanche, index) =>
        !lanche.state && (
          <BebidaCardapio
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
