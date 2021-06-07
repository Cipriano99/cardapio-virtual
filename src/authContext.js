import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function AuthProvider({ children }) {
  const [totalPedido, setTotalPedido] = useState(0);

  return (
    <Context.Provider value={{ totalPedido, setTotalPedido }}>
      {children}
    </Context.Provider>
  );
}

export function useTotalPedido() {
  const context = useContext(Context);
  const { totalPedido, setTotalPedido } = context;

  return { totalPedido, setTotalPedido };
}
