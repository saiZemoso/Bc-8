import { render, screen } from "@testing-library/react";
import React from "react";
import Icon from "./index";

const url = "/assests/grid.svg";
const text = "grid not found";

describe("Icon", () => {
  test("icon renders correctly", () => {
    render(<Icon src={url} alt={text} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
    expect(img).toHaveAttribute("alt", text);
  });

  test("altText renders correctly", () => {
    render(<Icon src={url} alt={text} />);
    const img = screen.getByAltText(text);
    expect(img).toBeInTheDocument();
  });
});
