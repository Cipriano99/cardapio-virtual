import { useRef } from 'react';
import { Form } from '@unform/web';
import { useTotalPedido } from '../../../../Context';

import ButtonMain from '../../../../Components/ButtonMain';
import Divisor from '../../../../Components/Divisor';
import TotalPedido from '../../../../Components/TotalPedido';

import TypePedido from './typePedido';

import { allListItems } from '../../../Data';

export default function FormPedido({ children, idPedido }) {
  const { totalPedido } = useTotalPedido();
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    const itensPedido = allListItems.filter((lanche) => lanche.state);

    const pedido = {
      itens: itensPedido.map((item) => ({
        nomeLanche: item.name,
        quantidade: item.quantidade,
        parcial: item.price * item.quantidade,
      })),
      info: data,
    };

    console.log(idPedido, pedido, totalPedido);
    TypePedido(idPedido, pedido, totalPedido);
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      {children}
      <br />
      <Divisor />
      <TotalPedido priceTotal={parseFloat(totalPedido).toFixed(2)} />
      <Divisor />
      <ButtonMain type="submit">Finalizar pedido</ButtonMain>
    </Form>
  );
}
