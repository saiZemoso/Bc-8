import { render, screen } from "@testing-library/react";
import MyTypography from "./index";
import React from "react";

describe("Typography renders", () => {
  test("Text Content", () => {
    render(<MyTypography>Hey</MyTypography>);
    const text = screen.getByText(/Hey/i);
    expect(text).toBeInTheDocument();
  });
  test("heading tags", () => {
    render(<MyTypography variant="h3">Hello</MyTypography>);
    const text = screen.getByRole("heading", { level: 3 });
    expect(text).toBeInTheDocument();
  });
});
