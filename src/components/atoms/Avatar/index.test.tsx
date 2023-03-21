import { fireEvent, render, screen } from "@testing-library/react";
import Avatars from "./index";
import React from "react";

const url = "/media/assets/profile.svg";
const width = "100%";
describe("Avatar atom renders", () => {
  test("text", () => {
    render(<Avatars>AZ</Avatars>);
    const text = screen.getByText(/^[A-Z]{2}$/i);
    expect(text).toBeInTheDocument();
  });
  test("image and its stylings", () => {
    render(<Avatars src={url} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", url);
    expect(image).toHaveStyle({
      width: `${width}`,
      height: `${width}`,
    });
  });
  test("OnClick event", () => {
    const onClick = jest.fn();
    render(<Avatars src={url} alt="profile" onClick={onClick} />);
    const image = screen.getByAltText("profile");
    fireEvent.click(image);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
