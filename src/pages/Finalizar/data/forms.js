import Input from '../../../Components/Input';
import Divisor from '../../../Components/Divisor';
import Select from '../../../Components/SelectInput';

const options = [
  { value: 'Cédulas', label: 'Cédulas' },
  { value: 'Cartão de crédito', label: 'Cartão de crédito' },
  { value: 'Cartão de débito', label: 'Cartão de débito' },
  { value: 'PIX', label: 'PIX' },
];

export const Local = () => (
  <>
    <Input name="nome" label="Nome" required />
    <Input name="cpf" label="CPF" type="number" maxLength="8" required />
    <Input name="identificação" label="Identificação da mesa" required />
    <Input name="observações" label="Observações" />
  </>
);

export const Delivery = () => (
  <>
    <Input name="nome" label="Nome" required />
    <Input name="cpf" label="CPF" type="number" maxLength="8" required />
    <Input name="cep" label="CEP" required />
    <>
      <Divisor />
      <br />
      <Input name="cidade" label="Cidade" />
      <Input name="bairro" label="Bairro" />
      <Input name="rua" label="Rua" />
      <Divisor />
      <br />
    </>
    <Input name="número" label="Número ou identificação" />
    <Input name="complemento" label="Complemento" />
    <Input name="observações" label="Observações" />
    <Select
      name="pagamento"
      label="Forma de pagamento"
      options={options}
      placeholder="Selecione a forma de pagamento"
    />
  </>
);

export const Retirada = () => (
  <>
    <Input name="nome" label="Nome" required />
    <Input name="cpf" label="CPF" type="number" maxLength="8" required />
    <Input name="observações" label="Observações" />
    <Select
      name="pagamento"
      label="Forma de pagamento"
      options={options}
      placeholder="Selecione a forma de pagamento"
    />
  </>
);
