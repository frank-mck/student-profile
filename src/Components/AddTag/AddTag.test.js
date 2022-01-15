import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil'
import AddTag from './AddTag';

test('renders an input field to add a tag', () => {
  render(<RecoilRoot><AddTag /></RecoilRoot>);
  const input = getByTestId(document.documentElement, 'add-tag-input');
  expect(input).toBeInTheDocument();
});

test('change the value of text field', () => {
  render(<RecoilRoot><AddTag /></RecoilRoot>);
  const input = getByTestId(document.documentElement, 'add-tag-input');
  fireEvent.change(input, { target: {value: 'tag1' }});
  expect(input).toHaveValue('tag1')
});

test('renders the tags element', () => {
  render(<RecoilRoot><AddTag /></RecoilRoot>);
  const tags = getByTestId(document.documentElement, 'tags');
  expect(tags).toBeInTheDocument();
})