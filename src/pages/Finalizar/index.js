import { useState } from 'react';
import { useTotalPedido } from '../../Context';

import TitlePage from '../../Components/TitlePage';
import ButtonSwitch from '../../Components/ButtonSwitch';
import Divisor from '../../Components/Divisor';
import TotalPedido from '../../Components/TotalPedido';

import { buttonsControll, functions } from './data';

import { Container, SemLista } from './styles';

export default function Pedido() {
  const [finalizar, setFinalizar] = useState(functions[0]);

  const { totalPedido } = useTotalPedido();

  return (
    <Container>
      <TitlePage>Finalizar Pedido</TitlePage>
      <Divisor />
      {totalPedido > 1 ? (
        <>
          <ButtonSwitch
            options={buttonsControll}
            functions={functions}
            action={setFinalizar}
          />
          {finalizar}
        </>
      ) : (
        <>
          <SemLista>Seu pedido ainda está vazio. ☹️</SemLista>
          <Divisor />
          <TotalPedido priceTotal={parseFloat(totalPedido).toFixed(2)} />
          <Divisor />
        </>
      )}
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
