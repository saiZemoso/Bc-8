import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./index";
import React from "react";

describe("Input Textbox renders", () => {
  test("textbox", () => {
    render(<Input variant="outlined" label="Type something" size="small" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle({ width: `100%` });
  });

  test("Accessible Textbox", () => {
    render(<Input variant="outlined" label="Type something" size="small" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeAccessible;
  });

  test("Textbox value onChange", () => {
    render(<Input variant="outlined" label="Type something" size="small" />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });
});
