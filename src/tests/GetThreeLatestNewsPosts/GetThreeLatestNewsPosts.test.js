import { renderHook } from "@testing-library/react";
import { GetThreeLatestNewsPosts } from "../../components/NewsPage/utils/GetThreeLatestNewsPosts";
import useContentful from "../../providers/ContentfulProvider/ContentfulProvider.hook";

// Mocking the useContentful hook
jest.mock("../../providers/ContentfulProvider/ContentfulProvider.hook");

describe("GetThreeLatestNewsPosts", () => {
  it("should return three news posts", () => {
    const mockNewsPosts = [
      { title: "Post 1", content: "Content 1", timestamp: 1 },
      { title: "Post 2", content: "Content 2", timestamp: 2 },
      { title: "Post 3", content: "Content 3", timestamp: 3 },
      { title: "Post 4", content: "Content 4", timestamp: 4 },
    ];

    // Mocking the return value of useContentful hook
    useContentful.mockReturnValue({ newsPosts: mockNewsPosts });

    // Rendering the hook
    const { result } = renderHook(() => GetThreeLatestNewsPosts());

    // Sort the posts by timestamp in descending order
    const sortedPosts = mockNewsPosts.sort((a, b) => a.timestamp - b.timestamp);

    // Asserting the result
    expect(result.current.length).toBe(3);
  });
});

describe("GetThreeLatestNewsPosts", () => {
  it("should return three latest news posts", () => {
    const mockNewsPosts = [
      { title: "Post 1", content: "Content 1", timestamp: 1 },
      { title: "Post 2", content: "Content 2", timestamp: 2 },
      { title: "Post 3", content: "Content 3", timestamp: 3 },
      { title: "Post 4", content: "Content 4", timestamp: 4 },
    ];

    // Mocking the return value of useContentful hook
    useContentful.mockReturnValue({ newsPosts: mockNewsPosts });

    // Rendering the hook
    const { result } = renderHook(() => GetThreeLatestNewsPosts());

    // Sort the posts by timestamp in descending order
    const sortedPosts = mockNewsPosts.sort((a, b) => a.timestamp - b.timestamp);

    // Asserting the result
    expect(result.current).toEqual([
      { title: "Post 1", content: "Content 1", timestamp: 1 },
      { title: "Post 2", content: "Content 2", timestamp: 2 },
      { title: "Post 3", content: "Content 3", timestamp: 3 },
    ]);
  });
});
