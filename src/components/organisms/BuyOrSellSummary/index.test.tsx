import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import BuySellSummary from "./index";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("Footer Renders", () => {
  test("loading text", () => {
    render(<BuySellSummary />);
    const loading = screen.getByText("loading...");
    expect(loading).toBeInTheDocument();
  });

  test("waiting to remove", async () => {
    render(<BuySellSummary />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const text = screen.getByText("You are buying");
    expect(text).toBeInTheDocument();
  });

  test("error text", async () => {
    server.use(
      rest.get("http://localhost:3000/productTracker", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<BuySellSummary />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const error = await screen.getByText("Something went wrong");
    expect(error).toBeInTheDocument();
  });

  test("error text for overview data", async () => {
    server.use(
      rest.get("http://localhost:3000/overview/2", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<BuySellSummary />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const error = await screen.getByText("Something went wrong");
    expect(error).toBeInTheDocument();
  });
  test("Button", async () => {
    const onClick = jest.fn();
    render(<BuySellSummary isBuy={false} />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    button.onclick = onClick;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("Button for buy card", async () => {
    const onClick = jest.fn();
    render(<BuySellSummary />);
    await waitForElementToBeRemoved(() => screen.getByText("loading..."));
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    button.onclick = onClick;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
