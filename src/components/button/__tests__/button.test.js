import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '..';



test('renders button with correct text', () => {
  render(<Button />);
  const buttonElement = screen.getByText(/MÁS NOTAS DE ACUMULADO GRILLA/i);
  expect(buttonElement).toBeInTheDocument();
});