import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputComponent, BodyInput, Label } from './styles';

export default function Input({ name, label, ...rest }) {
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

  return (
    <BodyInput>
      <Label>{label}</Label>
      <InputComponent
        name={name}
        ref={inputRef}
        type="text"
        placeholder=""
        {...rest}
      />
    </BodyInput>
  );
}
