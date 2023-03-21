import { render, screen } from "@testing-library/react";
import React from "react";
import AccountDropdown from "./index";

const url = "/media/assets/profile.svg";
const text = "avatar not loaded";

describe("AccountDropdown renders correctly", () => {
  test("image renders correctly", () => {
    render(<AccountDropdown src={url} />);
    const image = screen.getAllByRole("img");
    const img = image.find((img) => img.getAttribute("src") === url);
    expect(img).toBeInTheDocument();
  });

  test("text renders correctly", () => {
    render(<AccountDropdown src={url} alt={text} />);
    const image = screen.getAllByRole("img");
    const img = image.find((img) => img.getAttribute("src") === url);
    expect(img).toHaveAttribute("alt", text);
  });

  test("dropdown icon renders correctly", () => {
    render(<AccountDropdown src={url} />);
    const image = screen.getAllByRole("img");
    const img = image.find(
      (img) => img.getAttribute("src") === "/media/assets/dropdown.svg"
    );
    expect(img).toBeInTheDocument();
  });
});
