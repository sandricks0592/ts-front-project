import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders book store', () => {
  render(<App />);
  const logos = screen.getAllByAltText(/book store/i);
  expect(logos.length).toBeGreaterThan(0);
});
