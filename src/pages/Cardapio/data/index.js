import { useOnLanchonete } from '../../../Context';

import ItemList from './ItemList';

export default function Data() {
  const {
    onLanchonete: { cardapioList, cardapioNomeList },
  } = useOnLanchonete();

  const buttonsControll = cardapioNomeList.map((item) => item);

  const functions = cardapioList.map((item) => <ItemList items={item} />);

  return { buttonsControll, functions };
}
