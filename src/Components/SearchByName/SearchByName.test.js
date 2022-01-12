import { fireEvent, getByTestId, queryAllByText, render, screen } from '@testing-library/react';
import SearchByName from './SearchByName';

test('renders an input text field', () => {
  const students = [{firstName: 'Frank'}];
  render(<SearchByName studentsRef={students} students={students} />);
  const input = getByTestId(document.documentElement, 'input-name');
  expect(input).toBeInTheDocument();
});

