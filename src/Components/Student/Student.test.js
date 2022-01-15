import { fireEvent, getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Student from './Student';

test('renders a student and all credentials', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const student = getByTestId(document.documentElement, 'student')
  const email = screen.getByText(/Email:/i);
  const company = screen.getByText(/Company:/i);
  const skill = screen.getByText(/Skill:/i);
  const average = screen.getByText(/Average:/i);
  expect(average).toBeInTheDocument();
  expect(skill).toBeInTheDocument();
  expect(company).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(student).toBeInTheDocument();
});

test('dosent render a list of test result when button not clicked', () => {
  const grades = [1, 2, 3, 4];
  render(<RecoilRoot><Student grades={grades} /></RecoilRoot>);
  const studentsTests = queryByTestId(document.documentElement, 'tests');
  expect(studentsTests).not.toBeInTheDocument()
})

test('renders a students test result', () => {
  const grades = [1, 2, 3, 4];
  render(<RecoilRoot><Student grades={grades} /></RecoilRoot>);
  const btn = getByTestId(document.documentElement, 'btn');
  fireEvent.click(btn);

  const studentsTests = getByTestId(document.documentElement, 'tests');
  const test1 = screen.getByText(/Test 1: 1/i);
  const test2 = screen.getByText(/Test 2: 2/i);
  const test3 = screen.getByText(/Test 3: 3/i);
  const test4 = screen.getByText(/Test 4: 4/i);
  
  expect(studentsTests).toBeInTheDocument();
  expect(test1).toBeInTheDocument();
  expect(test2).toBeInTheDocument();
  expect(test3).toBeInTheDocument();
  expect(test4).toBeInTheDocument();
})

test('renders a students name', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'name')
  expect(students).toBeInTheDocument();
})

test('renders a students email', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'email');
  expect(students).toBeInTheDocument()
});

test('renders a students picture', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'pic');
  expect(students).toBeInTheDocument()
});

test('renders a students company', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'company');
  expect(students).toBeInTheDocument()
});

test('renders a students skill', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'skill');
  expect(students).toBeInTheDocument()
});

test('renders a students average', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'average');
  expect(students).toBeInTheDocument()
});
