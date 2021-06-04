import { useEffect, useState } from 'react';
import LancheCardapio from '../contents/LancheCardapio';

import burguer from './assets/burguer.png';
import { Container } from './styles';

export const lanchesList = [
  {
    type: 'lanche',
    img: burguer,
    name: 'Nome do lanche',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'lanche',
    img: burguer,
    name: 'Nome do lanche',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'lanche',
    img: burguer,
    name: 'Nome do lanche',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
  {
    type: 'lanche',
    img: burguer,
    name: 'Nome do lanche',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui nisi, commodo sit amet tincidunt in, faucibus in orci.',
    price: 'XX,xx',
    state: false,
  },
];

export default function Lanches() {
  const [atualizarList, setAtualizarList] = useState(false);

  function ListLanche() {
    return lanchesList.map(
      (lanche, index) =>
        !lanche.state && (
          <LancheCardapio
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
