import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./index";
import React from "react";

describe("NavigationBar Renders", () => {
  test("exact number of icons", () => {
    render(<NavBar />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toEqual(6);
  });
  test("onClick", () => {
    const onClick = jest.fn();
    render(<NavBar />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      button.onclick = onClick;
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });
  });
});
