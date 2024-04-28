import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink";

describe("ButtonLink component", () => {
  test("renders button with correct text", () => {
    render(<ButtonLink buttonName="Test Button" />, { wrapper: MemoryRouter });
    const buttonElement = screen.getAllByText(/Test Button/i);
    buttonElement.map((p) => expect(p).toBeInTheDocument());
  });

  test("renders button with correct aria-label", () => {
    render(<ButtonLink buttonName="Test Button" />, { wrapper: MemoryRouter });
    const buttonElement = screen.getByLabelText(/test button link button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders Link with correct path", () => {
    render(<ButtonLink buttonName="Test Button" path="/test" />, {
      wrapper: MemoryRouter,
    });
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
