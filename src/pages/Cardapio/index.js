import { useState } from 'react';

import TitlePage from '../../Components/TitlePage';
import Divisor from '../../Components/Divisor';
import ButtonSwitch from '../../Components/ButtonSwitch';

import Data from './data';

export default function Home() {
  const { buttonsControll, functions } = Data();

  const [categoryOn, setCategoryOn] = useState(functions[0]);

  return (
    <>
      <TitlePage>Cardápio</TitlePage>
      <Divisor />
      <ButtonSwitch
        options={buttonsControll}
        functions={functions}
        action={setCategoryOn}
      />
      {categoryOn}
    </>
  );
}
