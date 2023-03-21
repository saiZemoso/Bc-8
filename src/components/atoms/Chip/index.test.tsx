import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Chip from "./index";
import theme from "../../../themes";

const borderColor = theme.palette.info.orange;
const color = theme.palette.info.lightYellow;
const name = "Bitcoin";

describe("Chip Atom renders correctly", () => {
  test("label renders correctly", () => {
    render(
      <Chip name={name} bgcolor={`${color}`} borderColor={`${borderColor}`} />
    );
    const chip = screen.getByText(name);
    expect(chip).toBeInTheDocument();
  });

  test("onClick renders correctly", () => {
    const onClick = jest.fn();
    render(
      <Chip
        name={name}
        bgcolor={`${color}`}
        borderColor={`${borderColor}`}
        onClick={onClick}
      />
    );
    const chip = screen.getByText(name);
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("style renders correctly", () => {
    render(
      <Chip
        name={name}
        bgcolor={`${color}`}
        borderColor={`${borderColor}`}
        data-testid="mui-chip"
      />
    );
    const componentNode = screen.getByTestId("mui-chip");
    expect(componentNode).toHaveStyle({
      backgroundColor: color,
      borderColor: borderColor,
    });
  });
});
