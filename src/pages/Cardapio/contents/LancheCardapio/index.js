import { useState } from 'react';
import ButtonMain from '../../../../Components/ButtonMain';

import {
  Container,
  ImagemLanche,
  Img,
  Lanche,
  NomeLanche,
  DescriçãoLanche,
  PreçoLanche,
  Adicionar,
} from './styles';

export default function LancheCardapio(props) {
  const lanche = props.description;
  const updateList = props.update;

  const [stateSelected, setStateSelected] = useState(true);

  function toggleState() {
    setStateSelected(!stateSelected);

    lanche.state = stateSelected;

    updateList(stateSelected);
    setStateSelected(!stateSelected);
  }

  return (
    <Container>
      <ImagemLanche>
        <Img>
          <img src={lanche.img} alt={lanche.type} />
        </Img>
      </ImagemLanche>

      <Lanche>
        <NomeLanche>{lanche.name}</NomeLanche>

        <DescriçãoLanche>{lanche.description}</DescriçãoLanche>

        <PreçoLanche>R${lanche.price}</PreçoLanche>
      </Lanche>

      <Adicionar>
        <ButtonMain action={() => toggleState()}>Adicionar</ButtonMain>
      </Adicionar>
    </Container>
  );
}
