import LoginFrom from "./LoginForm";
import { render, screen } from "@testing-library/react";

test("renders Submit as a button", () => {
  //Arrange
  render(<LoginFrom />);

  //Act
  //...nothing

  //Assert
  const submitElememt = screen.getByDisplayValue("Submit", { exact: false });
  expect(submitElememt).toBeInTheDocument();
});
