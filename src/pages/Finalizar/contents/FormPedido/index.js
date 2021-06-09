import { useRef } from 'react';
import { Form } from '@unform/web';
import { useTotalPedido } from '../../../../Context';

import ButtonMain from '../../../../Components/ButtonMain';
import Divisor from '../../../../Components/Divisor';
import TotalPedido from '../../../../Components/TotalPedido';

export default function FormPedido({ children }) {
  const { totalPedido } = useTotalPedido();

  const formRef = useRef();
  const handleFormSubmit = (data) => {
    console.log(data);
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
