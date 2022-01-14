import { getByTestId, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Student from './Student';

test('renders a student and all credentials', () => {
  render(<RecoilRoot><Student /></RecoilRoot>);
  const student = getByTestId(document.documentElement, 'student')
  expect(student).toBeInTheDocument()
});

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
