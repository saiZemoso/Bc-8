import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from "./index";

const text = "Dashboard";

describe("Header renders correctly", () => {
  test("Header text renders correctly", () => {
    const { getByRole } = render(<Header label={text} />);
    const headingElement = getByRole("heading", { name: text });
    expect(headingElement).toBeInTheDocument();
  });

  test("images are rendered correctly", () => {
    render(<Header label={text} showButtons={true} />);
    const images = screen.getAllByRole("img");
    const numberOfImages = images.length;
    expect(numberOfImages).toBe(3);
  });

  test("noofbuttons renders correctly", () => {
    render(<Header label={text} showButtons={true} />);
    const button = screen.getAllByRole("button");
    const noOfButtons = button.length;
    expect(noOfButtons).toBe(2);
  });

  test("button text renders correctly", () => {
    render(<Header showButtons={true} />);
    const button = screen.getByRole("button", { name: "SELL" });
    expect(button).toBeInTheDocument();
  });

  test("button function renders correctly", async () => {
    render(<Header showButtons={true} />);
    const onClick = jest.fn();
    const button = screen.getByRole("button", { name: "SELL" });
    button.onclick = onClick;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
