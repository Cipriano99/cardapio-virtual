import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputComponent, BodyInput, Label } from './styles';

export default function Input({ name, label, buscaCEP, ...rest }) {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  function CEPbuscarFunction() {
    inputRef.current.value.length === 8 && buscaCEP(inputRef.current.value);
  }

  return (
    <BodyInput>
      <Label>{label}</Label>
      <InputComponent
        name={name}
        ref={inputRef}
        type="text"
        placeholder=""
        onChange={name === 'cep' ? CEPbuscarFunction : null}
        {...rest}
      />
    </BodyInput>
  );
}
