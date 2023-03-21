import { fireEvent, screen } from "@testing-library/dom";
import Tabs from "./index";
import React from "react";
import { render } from "@testing-library/react";

describe("Tabs", () => {
  const tabs = [
    { label: "All Assets", content: "All assets content", value: 0 },
    { label: "WatchList", content: "WatchList content", value: 1 },
    { label: "Overview", content: "Overview content", value: 2 },
    { label: "Wallet", content: "Wallet content", value: 3 },
  ];

  it("renders the tabs with the correct labels", () => {
    render(<Tabs tabs={tabs} />);
    tabs.forEach((tab) => {
      expect(screen.getByRole("tab", { name: tab.label })).toBeInTheDocument();
    });
  });

  it("renders the content for the first tab by default", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText(/All assets content/i)).toBeInTheDocument();
  });

  it("sets the value to the correct index when tab is clicked", () => {
    render(<Tabs tabs={tabs} />);
    const tab = screen.getByRole("tab", { name: /WatchList/i });
    fireEvent.click(tab);
    expect(tab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText(/WatchList content/i)).toBeInTheDocument();
  });
});
