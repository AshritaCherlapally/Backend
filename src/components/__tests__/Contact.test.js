import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for contact page", () => {
  beforeEach(() => {
    console.log("Before Each");
  });
  beforeAll(() => {
    console.log("Before All");
  });
  afterEach(() => {
    console.log("After Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  test("should load the contact page component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByPlaceholderText("message");
    expect(button).toBeInTheDocument();
  });
  test("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load all input boxes from the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
