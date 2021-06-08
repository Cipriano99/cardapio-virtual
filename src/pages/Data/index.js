import Home from '../Home';
import Cardapio from '../Cardapio';
import Pedido from '../Pedido';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBookOpen,
  faClipboard,
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
];
export const functions = [<Home />, <Cardapio />, <Pedido />];
