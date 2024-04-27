import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";

describe("ProjectCard component", () => {
  const mockCard = {
    id: 1,
    title: "project title",
    type: "project type",
    mainImage: "project-image.jpg",
  };

  test("renders project card with correct title and type", () => {
    // render component and pass mock data
    render(<ProjectCard card={mockCard} />, { wrapper: MemoryRouter });
    // screen.getByText is a function that finds an element on the screen based on its text content
    const titleElement = screen.getByText(/Project Title/i);
    const typeElement = screen.getByText(/Project Type/i);
    // what we expect
    expect(titleElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });

  test("renders Link with correct path", () => {
    render(<ProjectCard card={mockCard} />, { wrapper: MemoryRouter });
    const linkElement = screen.getByRole("link", { name: /Project Title/i });
    expect(linkElement).toHaveAttribute("href", "/project/project-title/1");
  });
});
