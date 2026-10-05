import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /padre de números/i })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /sumar número/i })).toHaveLength(5);
});
