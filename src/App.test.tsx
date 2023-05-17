import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(
    "Type movie title to filter..."
  );
  expect(searchInput).toBeInTheDocument();
});
