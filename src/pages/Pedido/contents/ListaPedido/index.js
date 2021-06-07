import { useState } from 'react';
import { useTotalPedido } from '../../../../authContext';

import {
  Container,
  ImagemLanche,
  Img,
  Lanche,
  NomeLanche,
  PreçoLanche,
  Controle,
  Unidades,
  Menos,
  Quantidade,
  Mais,
  Remover,
} from './styles';

export default function ListaPedido(props) {
  const { totalPedido, setTotalPedido } = useTotalPedido();

  const item = props.description;
  const updateList = props.update;

  const stateSelected = false;

  const [stateQuantidade, setStateQuantidade] = useState(item.quantidade);

  function toggleStateRemove() {
    item.state = stateSelected;
    updateList(!stateSelected);

    setTotalPedido(totalPedido - item.price * item.quantidade);

    item.quantidade = 1;

    setTimeout(() => updateList(!stateSelected), 300);
  }

  function handleRemoverUnidade() {
    if (item.quantidade > 1) {
      item.quantidade--;
      setTotalPedido(totalPedido - item.price);
    } else {
      item.quantidade = 1;
    }
    itemSetQuantidade();
  }

  function handleAdicionarUnidade() {
    item.quantidade++;
    itemSetQuantidade();

    setTotalPedido(totalPedido + item.price);
  }

  function itemSetQuantidade() {
    setStateQuantidade(item.quantidade);
  }

  return (
    <Container>
      <ImagemLanche>
        <Img>
          <img src={item.img} alt={item.type} />
        </Img>
      </ImagemLanche>

      <Lanche>
        <NomeLanche>{item.name}</NomeLanche>
        <PreçoLanche>R${item.price}</PreçoLanche>
      </Lanche>

      <Controle>
        <Quantidade>
          <Menos onClick={() => handleRemoverUnidade()}>-</Menos>
          <Unidades>{stateQuantidade}</Unidades>
          <Mais onClick={() => handleAdicionarUnidade()}>+</Mais>
        </Quantidade>

        <Remover
          onClick={() => {
            toggleStateRemove();
          }}
        >
          <u>Remover</u>
        </Remover>
      </Controle>
    </Container>
  );
}
