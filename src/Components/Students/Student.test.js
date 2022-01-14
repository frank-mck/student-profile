import { getByTestId, render } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import Students from "./Students";


test('renders a list of students', () => {
  render(<RecoilRoot><Students /></RecoilRoot>);
  const students = getByTestId(document.documentElement, 'students');
  expect(students).toBeInTheDocument();
})