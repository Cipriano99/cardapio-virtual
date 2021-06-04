import { useState } from 'react';

import TopBar from '../../Components/TopBar';
import TitlePage from '../../Components/TitlePage';
import Divisor from '../../Components/Divisor';
import ButtonSwitch from '../../Components/ButtonSwitch';
import ButtonPedido from './contents/ButtonPedido';

import { buttonsControll, functions } from './data';

import { Container } from './styles';

export default function Home() {
  const [categoryOn, setCategoryOn] = useState(functions[0]);

  return (
    <Container>
      <TopBar />
      <ButtonPedido />
      <TitlePage>Cardápio</TitlePage>
      <Divisor />
      <ButtonSwitch
        options={buttonsControll}
        functions={functions}
        action={setCategoryOn}
      />
      {categoryOn}
    </Container>
  );
}
