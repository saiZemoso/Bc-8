import { render, fireEvent } from "@testing-library/react";
import React from "react";
import TradeTab from ".";

describe("TradeTab component", () => {
  const props = {
    id: 1,
    name: "Bitcoin",
    currencyType: "BTC",
    price: "$60,000",
    change: 2,
    marketCap: "$1.2T",
    image: "/media/assets/bitcoin.svg",
    isWatchlisted: false,
    toggleStatus: jest.fn(),
  };

  test("renders the component with all the props", () => {
    const { getByRole, getByText, getByTestId } = render(
      <TradeTab {...props} />
    );

    expect(getByRole("row")).toBeInTheDocument();
    expect(getByText("Bitcoin")).toBeInTheDocument();
    expect(getByText("$60,000")).toBeInTheDocument();
    expect(getByText("$1.2T")).toBeInTheDocument();
    expect(getByTestId("watchlist-button")).toBeInTheDocument();
  });

  test("renders the star icon if the coin is not watchlisted", () => {
    const { getByTestId } = render(<TradeTab {...props} />);
    const button = getByTestId("watchlist-button");

    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("watchlist_star.svg");
  });

  test("renders the filled star icon if the coin is watchlisted", () => {
    const { getByTestId } = render(
      <TradeTab {...props} isWatchlisted={true} />
    );
    const button = getByTestId("watchlist-button");

    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("star_filled.svg");
  });

  test("calls the toggleStatus function when the button is clicked", () => {
    const { getByTestId } = render(<TradeTab {...props} />);
    const button = getByTestId("watchlist-button");

    fireEvent.click(button);
    expect(props.toggleStatus).toHaveBeenCalledTimes(1);
    expect(props.toggleStatus).toHaveBeenCalledWith(1);
  });

  test("formats positive amount correctly", () => {
    const { getByText } = render(<TradeTab {...props} change={1.06} />);
    const posValue = getByText(/\+1\.06\%?/i);
    expect(posValue).toBeInTheDocument();
  });

  test("formats positive amount correctly", () => {
    const { getByText } = render(<TradeTab {...props} change={-1.06} />);
    const negValue = getByText(/\-1\.06\%?/i);
    expect(negValue).toBeInTheDocument();
  });
  test("formats positive amount correctly", () => {
    const { getByText } = render(<TradeTab {...props} change={0} />);
    expect(getByText("0%")).toBeInTheDocument();
  });
});

