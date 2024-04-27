import React from "react";
import { render, screen } from "@testing-library/react";
import NewsPost from "../../components/NewsPage/NewsPost";
import { MemoryRouter } from "react-router-dom";

describe("NewsPost component", () => {
  test("Renders NewsPost with correct title & subtitle", () => {
    const post = {
      NewsTitle: "Title Test",
      NewsSubtitle: "Subtitle Test",
      //   NewsContent: "Content Test",
    };

    // Render NewsPost component with the test data
    render(
      <MemoryRouter>
        <NewsPost post={post} showFullPost={true} />
      </MemoryRouter>,
    );

    // Assertions
    const titleElement = screen.getByRole("heading", { level: 3 });
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByRole("heading", { level: 4 });
    expect(subtitleElement).toBeInTheDocument();

    // const contentElement = screen.getByText("Content Test");
    // expect(contentElement).toBeTruthy();
  });
});
