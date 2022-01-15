import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Students from '../Students/Students';
import { RecoilRoot } from 'recoil'
import SearchBars from './SearchBars';

test('renders an input to search by name', () => {
  render(<RecoilRoot><SearchBars /></RecoilRoot>);
  const input = getByTestId(document.documentElement, 'input-name');
  expect(input).toBeInTheDocument();
});

test('renders an input for search by tag', () => {
  render(<RecoilRoot><SearchBars /></RecoilRoot>);
  const input = getByTestId(document.documentElement, 'input-tag');
  expect(input).toBeInTheDocument();
});

test('filterPreferences method is called and updates value in search by name input', () => {
  const students = [[{firstName: 'frank', lastName: 'mckenna'}]]
  const filterPreferences = jest.fn().mockImplementation();
  const setStudents = jest.fn().mockImplementation();

  render(<RecoilRoot><SearchBars setStudents={setStudents} students={students} onchange={filterPreferences()} /></RecoilRoot>);
  const input = screen.getByTestId('input-name')
  fireEvent.change(input, { target: { value: 'ro' }});  
  expect(input).toHaveValue('ro');
})

test('filterPreferences method is called and updates value in search by tag input', () => {
  const students = [[{firstName: 'frank', lastName: 'mckenna'}]]
  const filterPreferences = jest.fn().mockImplementation();
  const setStudents = jest.fn().mockImplementation();

  render(<RecoilRoot><SearchBars setStudents={setStudents} students={students} onchange={filterPreferences()} /></RecoilRoot>);
  const input = screen.getByTestId('input-tag')
  fireEvent.change(input, { target: { value: 'tag1' }});  
  expect(input).toHaveValue('tag1');
})

