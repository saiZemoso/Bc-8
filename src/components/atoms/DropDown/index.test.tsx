import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DropDown from "./index";

describe("DropDown Component", () => {
  test("renders with the correct options", () => {
    render(
      <DropDown
        options={[
          { label: "option 1", value: "0" },
          { label: "option 2", value: "1" },
          { label: "option 3", value: "2" },
        ]}
        message={"select an option"}
        onChange={(value) => {
          {
            console.log(value);
          }
        }}
      />
    );

    const selectElement = screen.getByText("option 1");
    expect(selectElement).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(4);

    expect(options[3]).toHaveValue("2");
    expect(options[3]).toHaveTextContent("option 3");
  });

  test("can select an option", () => {
    const handleChange = jest.fn();

    render(
      <DropDown
        options={[
          { label: "Select an option", value: "0" },
          { label: "option 1", value: "1" },
          { label: "option 1", value: "2" },
          { label: "option 1", value: "3" },
        ]}
        message={"select an option"}
        onChange={handleChange}
      />
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "3" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("3");
  });
});
