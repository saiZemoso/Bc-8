import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "./index";

describe("Button atom renders", () => {
  test("text", () => {
    render(
      <Button
        color="primary"
        variant="text"
        sx={{ height: "10px", width: "30px" }}>
        button
      </Button>
    );
    const text = screen.getByText(/button/i);
    expect(text).toBeInTheDocument();
  });

  test("OnClick event", () => {
    const onClick = jest.fn();
    render(
      <Button color="primary" variant="text" onClick={onClick}>
        button
      </Button>
    );
    const image = screen.getByRole("button");
    fireEvent.click(image);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
