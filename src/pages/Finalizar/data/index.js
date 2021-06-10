import FormPedido from '../contents/FormPedido';

import { Local, Delivery, Retirada } from '../data/forms';

export const buttonsControll = ['Consumir no local', 'Delivery', 'Retirada'];

export const functions = [
  <FormPedido idPedido="0">
    <Local />
  </FormPedido>,

  <FormPedido idPedido="1">
    <Delivery />
  </FormPedido>,

  <FormPedido idPedido="2">
    <Retirada />
  </FormPedido>,
];
