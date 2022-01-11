import { getByTestId, render, screen } from '@testing-library/react';
import Student from './Student';

test('renders a student', () => {
  render(<Student />);
  expect(getByTestId(document.documentElement, 'student')).toBeInTheDocument()
});


