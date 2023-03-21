import { render, screen } from "@testing-library/react";
import React from "react";
import Coin from "./index";

describe("Coin working properly", () => {
  test("Avatars rendering correctly", () => {
    render(
      <Coin coinName="Bitcoin" coinSrc="./coins/Bitcoin.png" coinAbbr="BTC" />
    );
    const avatarElement = screen.getByRole("img");
    expect(avatarElement).toBeInTheDocument();
  });
  test("Coin Text  rendering correctly", () => {
    render(
      <Coin coinName="Bitcoin" coinSrc="./coins/Bitcoin.png" coinAbbr="BTC" />
    );
    const textElement = screen.getByText("Bitcoin");
    expect(textElement).toBeInTheDocument();

    const abbrTextElement = screen.getByText("BTC");
    expect(abbrTextElement).toBeInTheDocument();
  });

  test("Coin Sold Text  rendering correctly with bgcolor", () => {
    render(
      <Coin
        coinName="Bitcoin BTC "
        coinSrc="./coins/success.png"
        coinAbbr="Sold"
        hasBgColor={true}
        bgColor="#E8E8F7"
        textColor="#4B4B60"
      />
    );
    const abbrTextElement = screen.getByText("Sold");
    expect(abbrTextElement).toBeInTheDocument();

    expect(abbrTextElement).toHaveStyle("color:#4B4B60");

    expect(abbrTextElement).toHaveStyle("backgroundColor:#E8E8F7");
  });
  test("Coin for Transaction rendering correctly with bgcolor", () => {
    render(
      <Coin
        coinName="Bitcoin BTC "
        coinSrc="./coins/success.png"
        coinAbbr="From Jane Cooper"
        hasBgColor={false}
        bgColor="#E8E8F7"
        textColor="#4B4B60"
        forTransaction={true}
        date={25}
        month='Feb'
        transactionStatus="Sold"
      />
    );
    const abbrTextElement = screen.getByText("From Jane Cooper");
    expect(abbrTextElement).toBeInTheDocument();
  });
});
