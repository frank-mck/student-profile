import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Students from '../Students/Students';
import { RecoilRoot } from 'recoil'

test('renders an input text field', () => {
  const filterStudents = jest.fn();
  const students = [{firstName: 'Frank', lastName: 'mckenna'}];
  render(<RecoilRoot><Students studentsRef={students} students={students} onchange={filterStudents()} /></RecoilRoot>);
  const input = getByTestId(document.documentElement, 'input-name');
  expect(input).toBeInTheDocument();
});

test('the filterStudents method is called and updates value in input', () => {
  const students = [[{firstName: 'frank', lastName: 'mckenna', id: 1, company: 'a', email: 'c', pic: 'd', skill: 'r', grades: [1, 2]}]]
  const filterStudents = jest.fn().mockImplementation();
  render(<RecoilRoot><Students studentsRef={students} students={students} onchange={filterStudents()} /></RecoilRoot>);
  const input = screen.getByTestId('input-name')
  fireEvent.change(input, { target: { value: 'ro' }});  
  expect(input).toHaveValue('ro'); 
})


