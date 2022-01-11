import { getByTestId, render, screen } from '@testing-library/react';
import Student from './Student';

test('renders a student', () => {
  render(<Student />);
  expect(getByTestId(document.documentElement, 'student')).toBeInTheDocument()
});

test('renders a students email', () => {
  render(<Student />);
  const students = getByTestId(document.documentElement, 'email');
  expect(students).toBeInTheDocument()
});

test('renders a students picture', () => {
  render(<Student />);
  const students = getByTestId(document.documentElement, 'pic');
  expect(students).toBeInTheDocument()
});

test('renders a students company', () => {
  render(<Student />);
  const students = getByTestId(document.documentElement, 'company');
  expect(students).toBeInTheDocument()
});

test('renders a students skill', () => {
  render(<Student />);
  const students = getByTestId(document.documentElement, 'skill');
  expect(students).toBeInTheDocument()
});

test('renders a students average', () => {
  render(<Student />);
  const students = getByTestId(document.documentElement, 'average');
  expect(students).toBeInTheDocument()
});