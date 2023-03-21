import { render, screen } from "@testing-library/react";
import React from "react";
import ProductTracker from "./index";

describe("Footer Renders", () => {
  test("Text correctly when selling", () => {
    render(
      <ProductTracker
        data={{
          id: 1,
          src: "/media/assets/card.svg",
          sellingSrc: "/media/assets/bitcoin.svg",
          iconType: "Payment method",
          sellingIconType: "Paying Through",
          iconDetails: "Visa Card ...8843",
          sellingIconDetails: "Bitcoin wallet",
          padding: "12px",
          sellingPadding: "10px",
        }}
        isBuy={false}
      />
    );
    const text = screen.getByText("Paying Through");
    const details = screen.getByText("Bitcoin wallet");
    expect(text).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });
  test("Text correctly", () => {
    render(
      <ProductTracker
        data={{
          id: 1,
          src: "/media/assets/card.svg",
          sellingSrc: "/media/assets/bitcoin.svg",
          iconType: "Payment method",
          sellingIconType: "Paying Through",
          iconDetails: "Visa Card ...8843",
          sellingIconDetails: "Bitcoin wallet",
          padding: "12px",
          sellingPadding: "10px",
        }}
      />
    );
    const text = screen.getByText("Payment method");
    const details = screen.getByText("Visa Card ...8843");
    expect(text).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });
});
