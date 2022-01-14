import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Students from '../Students/Students';
import SearchByName from './SearchBars';

test('renders an input text field', () => {
  const filterStudents = jest.fn();
  const students = [{firstName: 'Frank', lastName: 'mckenna'}];
  render(<SearchByName studentsRef={students} students={students} onchange={filterStudents()} />);
  const input = getByTestId(document.documentElement, 'input-name');
  expect(input).toBeInTheDocument();
});

test('the filterStudents method is called and updates value in input', () => {
  const students = [[{firstName: 'frank', lastName: 'mckenna', id: 1, company: 'a', email: 'c', pic: 'd', skill: 'r', grades: [1, 2]}]]
  const filterStudents = jest.fn().mockImplementation();
  render(<Students students={students} studentsRef={students} onChange={filterStudents('ro')} />);
  const input = screen.getByTestId('input-name')
  fireEvent.change(input, { target: { value: 'ro' }});  
  expect(input).toHaveValue('ro'); 
})


