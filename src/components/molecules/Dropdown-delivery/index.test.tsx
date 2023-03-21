import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { DropDownDelivery } from ".";

describe("DropDelivery", () => {
  test("renders correctly", () => {
    render(
      <DropDownDelivery
        options={[
          {
            speed: "Instant",
            time: "2-5 minutes",
            fee: "Delivery fees",
            price: "0.001 BTC",
            label: "option 1",
            value: 0,
          },
          {
            speed: "Faster",
            time: "4 hours",
            fee: "Delivery fees",
            price: "0.0001 BTC",
            label: "option 2",
            value: 1,
          },
          {
            speed: "Fast",
            time: "120 hours",
            fee: "Delivery fees",
            price: "0.00001 BTC",
            label: "option 3",
            value: 2,
          },
          {
            speed: "None",
            time: " ",
            fee: "  ",
            price: "  ",
            label: "option 4",
            value: 3,
          },
        ]}
      ></DropDownDelivery>
    );
    const selectElement = screen.getByRole("listbox");
    expect(selectElement).toBeInTheDocument();
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    const selectElement1 = screen.getByTestId("selectId");
    fireEvent.click(selectElement1);
  });
});
