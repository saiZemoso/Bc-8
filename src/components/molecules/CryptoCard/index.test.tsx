import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CryptoCard from "./index";
import theme from "../../../themes";

const url = "/media/assets/bitcoin.svg";
const color = theme.palette.primary.primary500;

describe("CryptoCard renders correctly", () => {
  test("text renders correctly", () => {
    const text = "Bitcoin";
    const { getByText } = render(<CryptoCard name={text} />);
    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  test("image renders correctly", () => {
    render(<CryptoCard image={url} />);
    const image = screen.getAllByRole("img");
    const img = image.find((img) => img.getAttribute("src") === url);
    expect(img).toBeInTheDocument();
  });

  test("border color renders correctly", () => {
    const { getByTestId } = render(<CryptoCard />);
    const gridElement = getByTestId("crypto-card");
    fireEvent.click(gridElement);
    expect(gridElement).toHaveStyle({
      borderColor: `2px solid ${color}`,
    });

    fireEvent.click(gridElement);
    expect(gridElement).toHaveStyle({
      borderColor: "",
    });
  });
});
