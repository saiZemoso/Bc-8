import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./index";
import React from "react";

describe("Footer Renders", () => {
  test("Text", () => {
    render(<Footer />);
    const text = screen.getByText("Dashboard");
    expect(text).toBeInTheDocument();
  });

  test("Button", () => {
    const onClick = jest.fn();
    render(<Footer />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    button.onclick = onClick;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("Dropdown", () => {
    const handleChange = jest.fn();
    render(<Footer />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    fireEvent.change(dropdown, { target: { value: "1" } });
    expect(handleChange).toBeTruthy();

    const options = screen.getAllByRole("option");
    expect(options.length).toEqual(5);
  });
});
