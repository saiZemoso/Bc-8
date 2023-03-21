import React from "react";
import ColumnHeader from "./index";
import { render, screen } from "@testing-library/react";

describe("ColumnHeader Molecule Renders", () => {
  test("tablehead row and cells", () => {
    render(<ColumnHeader />);

    const cell = screen.getByText("Name");
    expect(cell).toBeInTheDocument();

    const cells = screen.getAllByRole("cell");
    expect(cells.length).toEqual(5);

    const icons = screen.getAllByRole("img");
    expect(icons.length).toEqual(1);
  });
});
