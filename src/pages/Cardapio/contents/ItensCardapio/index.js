import { useState } from 'react';
import { useTotalPedido } from '../../../../Context';

import ButtonMain from '../../../../Components/ButtonMain';

import {
  Container,
  Imagem,
  Img,
  Item,
  Nome,
  Descrição,
  Preço,
  Adicionar,
} from './styles';

export default function ItensCardapio(props) {
  const { totalPedido, setTotalPedido } = useTotalPedido();

  const item = props.description;

  const updateList = props.update;

  const [stateSelected, setStateSelected] = useState(true);

  function toggleState() {
    setStateSelected(!stateSelected);

    item.state = stateSelected;

    updateList(stateSelected);
    setStateSelected(!stateSelected);
  }

  function handleSelect() {
    setTotalPedido(totalPedido + item.price);

    toggleState();
  }

  return (
    <Container>
      <Imagem>
        <Img>
          <img src={item.img} alt={item.type} />
        </Img>
      </Imagem>

      <Item>
        <Nome>{item.name}</Nome>

        <Descrição>{item.description}</Descrição>

        <Preço>R${item.price}</Preço>
      </Item>

      <Adicionar>
        <ButtonMain
          action={() => {
            handleSelect();
          }}
        >
          Adicionar
        </ButtonMain>
      </Adicionar>
    </Container>
  );
}
