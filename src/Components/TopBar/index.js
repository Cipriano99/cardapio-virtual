import React from 'react';

import { Container, Title } from './styles';

export default function TopBar({ children }) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
