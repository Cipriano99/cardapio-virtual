import { useState } from 'react';
import cep from 'cep-promise';

import Input from '../../../Components/Input';
import Select from '../../../Components/SelectInput';
import Divisor from '../../../Components/Divisor';
import TotalPedido from '../../../Components/TotalPedido';

const options = [
  { value: 'Cédulas', label: 'Cédulas' },
  { value: 'Cartão de crédito', label: 'Cartão de crédito' },
  { value: 'Cartão de débito', label: 'Cartão de débito' },
  { value: 'PIX', label: 'PIX' },
];

export const Local = () => (
  <>
    <Input name="nome" label="Nome" required />
    <Input name="identificação" label="Identificação da mesa" required />
    <Input name="observações" label="Observações" />
  </>
);

export function Delivery() {
  const [resultCEP, setResultCEP] = useState({});

  function buscaCEP(value) {
    cep(value)
      .then((result) => setResultCEP(result))
      .catch((error) => setResultCEP(error));
  }

  return (
    <>
      <Input name="nome" label="Nome" required />
      <Input
        name="cep"
        label="CEP"
        type="tel"
        maxLength="8"
        buscaCEP={buscaCEP}
        required
      />
      <Input name="cidade" label="Cidade" value={resultCEP.city} />

      {resultCEP.neighborhood ? (
        <Input name="bairro" label="Bairro" value={resultCEP.neighborhood} />
      ) : (
        <Input name="bairro" label="Bairro" />
      )}

      {resultCEP.street ? (
        <Input name="rua" label="Rua" value={resultCEP.street} />
      ) : (
        <Input name="rua" label="Rua" />
      )}

      <Input name="número" label="Número ou identificação" />
      <Input name="complemento" label="Complemento (opcional)" />
      <Select
        name="pagamento"
        label="Forma de pagamento"
        options={options}
        placeholder="Selecione a forma de pagamento"
        isSearchable={false}
      />
      <Input name="observações" label="Observações (opcional)" />
      <br />
      <Divisor />
      <TotalPedido entrega="Delivery" priceTotal={parseFloat(5).toFixed(2)} />
    </>
  );
}

export const Retirada = () => (
  <>
    <Input name="nome" label="Nome" required />
    <Select
      name="pagamento"
      label="Forma de pagamento"
      options={options}
      placeholder="Selecione a forma de pagamento"
      isSearchable={false}
    />
    <Input name="observações" label="Observações (opcional)" />
  </>
);
