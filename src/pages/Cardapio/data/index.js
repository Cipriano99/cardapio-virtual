import ItemList from './ItemList';

import { lanchesList } from '../../Data/lanchesList';
import { sucosList } from '../../Data/sucosList';
import { cervejasList } from '../../Data/cervejasList';
import { drinksList } from '../../Data/drinksList';

export const buttonsControll = ['Lanches', 'Sucos', 'Cervejas', 'Drinks'];

export const functions = [
  <ItemList items={lanchesList} />,
  <ItemList items={sucosList} />,
  <ItemList items={cervejasList} />,
  <ItemList items={drinksList} />,
];
