import { lanchesList } from './lanchesList';
import { sucosList } from './sucosList';
import { cervejasList } from './cervejasList';

import logo from './assets/logo.png';
import paleta from './styles';

const cardapio = [...lanchesList, ...sucosList, ...cervejasList];

const cardapioNomeList = ['Lanches', 'Sucos', 'Cervejas'];

const cardapioList = [lanchesList, sucosList, cervejasList];

export default function Lanchonete01() {
  return {
    logo,
    nomeLanchonete: 'MyLanchonete 01',
    PaletaLanchonete: paleta,
    cardapio,
    cardapioNomeList,
    cardapioList,
  };
}
