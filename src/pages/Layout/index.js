import { useState, useEffect } from 'react';
import { useOnLanchonete, Lanchonetes } from '../../Context';

import TopBar from '../../Components/TopBar';
import NavBottom from '../../Components/NavBottom';

import Cipriano from './cipriano';

import { buttonsControll, functions } from '../Data';

import { Container, Top, Main, Bottom } from './styles';

function Layout(props) {
  const { onLanchonete, setOnLanchonete } = useOnLanchonete();

  useEffect(() => {
    setOnLanchonete(Lanchonetes[props.id]);
  }, [setOnLanchonete, props.id]);

  const [pageOn, setPageOn] = useState(functions[0]);

  return (
    <Container>
      <Top>
        <TopBar>{onLanchonete.nomeLanchonete}</TopBar>
      </Top>

      <Main>
        {pageOn}

        <Cipriano />
      </Main>

      <Bottom>
        <NavBottom
          options={buttonsControll}
          functions={functions}
          action={setPageOn}
        />
      </Bottom>
      <onLanchonete.PaletaLanchonete />
    </Container>
  );
}

export default Layout;
