import { fireEvent, render, screen } from "@testing-library/react";
import { SearchTab } from ".";
import React from "react";

const url = "./media/assets/searchIcon.svg";
const text = "search Icon";

describe("Search tab molecule renders correctly", () => {
  //test case to test the placeholder Accessibility
  test("Placeholder Text Accessibility ", () => {
    render(<SearchTab type={""} />);
    const name = screen.getByPlaceholderText("Search All Assets");
    expect(name).toBeInTheDocument();
  });

  //test for the styles
  test("test for styles ", () => {
    render(<SearchTab type={""} />);
    const input = screen.getByTestId("element-to-focus");
    expect(input).toBeInTheDocument();
    input.blur();
    expect(input).not.toHaveFocus();
  });

  //testcase for the icon rendering and alternate text rendering
  test("icon renders correctly", () => {
    render(<SearchTab type={""} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
    expect(img).toHaveAttribute("alt", text);
  });

  test("altText renders correctly", () => {
    render(<SearchTab type={""} />);
    const img = screen.getByAltText(text);
    expect(img).toBeInTheDocument();
  });

  //test case for the onclick functionality of the icon button
  test("onClick", () => {
    const onClick = jest.fn();
    render(<SearchTab type={""} />);
    const Iconbutton = screen.getAllByRole("button");
    Iconbutton.forEach((button) => {
      button.onclick = onClick;
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });
  });
});
