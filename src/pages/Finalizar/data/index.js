import FormPedido from '../contents/FormPedido';

import { Local, Delivery, Retirada } from '../data/forms';

export const buttonsControll = ['Consumir no local', 'Delivery', 'Retirada'];

export const functions = [
  <FormPedido>
    <Local />
  </FormPedido>,

  <FormPedido>
    <Delivery />
  </FormPedido>,

  <FormPedido>
    <Retirada />
  </FormPedido>,
];
