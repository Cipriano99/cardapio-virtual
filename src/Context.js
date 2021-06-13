import { createContext, useContext, useState } from 'react';

import Lanchonete01 from './pages/Data/Lanchonete01';
import Lanchonete02 from './pages/Data/Lanchonete02';

const Context = createContext();

export const Lanchonetes = [Lanchonete01, Lanchonete02];

export function Provider({ children }) {
  const [totalPedido, setTotalPedido] = useState(0);
  const [onLanchonete, setOnLanchonete] = useState(Lanchonetes[0]);

  return (
    <Context.Provider
      value={{ onLanchonete, setOnLanchonete, totalPedido, setTotalPedido }}
    >
      {children}
    </Context.Provider>
  );
}

export function useOnLanchonete() {
  const context = useContext(Context);
  const { onLanchonete, setOnLanchonete } = context;

  return { onLanchonete, setOnLanchonete };
}

export function useTotalPedido() {
  const context = useContext(Context);
  const { totalPedido, setTotalPedido } = context;

  return { totalPedido, setTotalPedido };
}
