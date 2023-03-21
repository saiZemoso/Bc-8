import { fireEvent, render, screen } from "@testing-library/react";
import PaymentCards from "./index";
import React from "react";

describe("PaymentCards Molecule Renders", () => {
  test("Text and Images", () => {
    render(
      <PaymentCards
        data={[
          {
            value: 1,
            cardno: "8845",
            cardsrc: "/media/assets/visa.svg",
            width: "28px",
            height: "8px",
          },
          {
            value: 2,
            cardno: "8846",
            cardsrc: "/media/assets/master.svg",
            width: "26px",
            height: "21px",
          },
        ]}
      />
    );
    const text = screen.getByText(/8845/);
    const images = screen.getAllByRole("img");
    expect(text).toBeInTheDocument();
    expect(images.length).toEqual(2);
  });
  test("checked radio buttons", () => {
    render(
      <PaymentCards
        data={[
          {
            value: 1,
            cardno: "8845",
            cardsrc: "/media/assets/visa.svg",
            width: "28px",
            height: "8px",
          },
          {
            value: 2,
            cardno: "8846",
            cardsrc: "/media/assets/master.svg",
            width: "26px",
            height: "21px",
          },
        ]}
      />
    );
    const cards = screen.getAllByRole("radio");
    fireEvent.click(cards[0]);
    expect(cards[0]).toBeChecked();
    expect(cards[1]).not.toBeChecked();
  });
});
