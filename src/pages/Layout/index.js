import { useState } from 'react';

import TopBar from '../../Components/TopBar';
import NavBottom from '../../Components/NavBottom';

import { buttonsControll, functions } from '../Data';

import { Container, Top, Main, Bottom } from './styles';

function Layout() {
  const [pageOn, setPageOn] = useState(functions[0]);
  return (
    <Container>
      <Top>
        <TopBar />
      </Top>

      <Main>{pageOn}</Main>

      <Bottom>
        <NavBottom
          options={buttonsControll}
          functions={functions}
          action={setPageOn}
        />
      </Bottom>
    </Container>
  );
}

export default Layout;
