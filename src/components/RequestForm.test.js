import { render, screen, fireEvent } from '@testing-library/react';
import Requests from '../pages/Requests';

test('validates a request and adds it to the visible list', () => {
  render(<Requests />);
  fireEvent.click(screen.getByRole('button', { name: 'Add request' }));
  expect(screen.getByText('Please fill in all four fields.')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Blood type'), { target: { value: 'O-' } });
  fireEvent.change(screen.getByLabelText('Hospital'), { target: { value: 'Test Hospital' } });
  fireEvent.change(screen.getByLabelText('City or area'), { target: { value: 'Saida' } });
  fireEvent.change(screen.getByLabelText('Units needed'), { target: { value: '1.5' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add request' }));
  expect(screen.getByText('Units must be a whole number of at least 1.')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Units needed'), { target: { value: '2' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add request' }));
  expect(screen.getByRole('heading', { name: 'Test Hospital' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Requests (7)' })).toBeInTheDocument();
  expect(screen.getByLabelText('Hospital')).toHaveValue('');
});
