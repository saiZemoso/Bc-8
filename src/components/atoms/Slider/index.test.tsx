import { render, screen } from "@testing-library/react";
import React from "react";
import Slider from "./index";

describe("Slider Renders", () => {
  test("to be vertical", () => {
    render(<Slider />);
    const slider = screen.getByLabelText("slider");
    expect(slider).toHaveAttribute("aria-orientation", "vertical");
  });
  test("correct value", () => {
    render(<Slider />);
    const slider = screen.getByLabelText("slider");
    expect(slider).toHaveValue("50");
  });
});
