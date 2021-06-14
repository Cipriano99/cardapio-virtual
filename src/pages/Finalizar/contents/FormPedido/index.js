import { useRef } from 'react';
import { Form } from '@unform/web';
import { useTotalPedido, useOnLanchonete } from '../../../../Context';

import ButtonMain from '../../../../Components/ButtonMain';
import Divisor from '../../../../Components/Divisor';
import TotalPedido from '../../../../Components/TotalPedido';

import TypePedido from './typePedido';

export default function FormPedido({ children, idPedido }) {
  const { onLanchonete } = useOnLanchonete();
  const { totalPedido } = useTotalPedido();
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    const itensPedido = onLanchonete.cardapio.filter((lanche) => lanche.state);

    const pedido = {
      itens: itensPedido.map((item) => ({
        nomeLanche: item.name,
        quantidade: item.quantidade,
        parcial: item.price * item.quantidade,
      })),
      info: data,
    };

    TypePedido(idPedido, pedido, parseFloat(totalPedido).toFixed(2));
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      {children}
      <Divisor />
      <TotalPedido priceTotal={parseFloat(totalPedido).toFixed(2)} />
      <Divisor />
      <ButtonMain type="submit">Finalizar pedido</ButtonMain>
    </Form>
  );
}
