import Home from '../Home';
import Cardapio from '../Cardapio';
import Pedido from '../Pedido';
import Finalizar from '../Finalizar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBookOpen,
  faClipboard,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

export const buttonsControll = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    name: 'Início',
  },
  {
    icon: <FontAwesomeIcon icon={faBookOpen} />,
    name: 'Cardápio',
  },
  {
    icon: <FontAwesomeIcon icon={faClipboard} />,
    name: 'Pedido',
  },
  {
    icon: <FontAwesomeIcon icon={faShare} />,
    name: 'Finalizar',
  },
];

export const functions = [<Home />, <Cardapio />, <Pedido />, <Finalizar />];
