import { client } from "../../client";
import ContentfulProvider from "../../providers/ContentfulProvider/ContentfulProvider";
import ContentfulProviderContext from "../../providers/ContentfulProvider/ContentfulProvider.context";
import { render, screen, act, waitFor } from "@testing-library/react";

describe("ProjectCard", () => {
  let originalGetEntries;

  beforeEach(() => {
    originalGetEntries = client.getEntries;
    client.getEntries = jest.fn().mockResolvedValue({
      items: [ {sys: {}, 
        // {
        //   sys: {
        //     id: "1",
        //   },
          fields: {
            title: "Test Project",
            type: "Test Type",
            description: "Test Description",
            aboutTheProject: "About Test Project",
            location: "Test Location",
            status: "Test Status",
            supervisor: "Test Supervisor",
            // action1Title: "Action 1 Title",
            // action1Description: "Action 1 Description",
            action1Image: {
              fields: {
                file: {
                  // url: "http://action1-image-url.jpg",
                },
              },
            },
            // action2Title: "Action 2 Title",
            action2Description: "Action 2 Description",
            action2Image: {
              fields: {
                file: {
                  // url: "http://action2-image-url.jpg",
                },
              },
            },
            // action3Title: "Action 3 Title",
            action3Description: "Action 3 Description",
            action3Image: {
              fields: {
                file: {
                  url: "http://action3-image-url.jpg",
                },
              },
            },
            mainImage: {
              fields: {
                file: {
                  // url: "http://test-image-url.jpg",
                },
              },
            },
            file: {
              // url: "http://test.cio",
            },
          },
        },
      ],
    });
  });

  afterEach(() => {
    client.getEntries = originalGetEntries;
  });

  // it("should fetch project data from the server", async () => {
  //   render(
  //     <ContentfulProvider>
  //       <ContentfulProviderContext.Consumer>
  //         {(data) => (
  //           <div>{data ? "Data fetched successfully!" : "Loading..."}</div>
  //         )}
  //       </ContentfulProviderContext.Consumer>
  //     </ContentfulProvider>,
  //   );
  //   const contentElement = screen.getByText(/Data fetched successfully!/i);
  //   expect(contentElement).toBeInTheDocument();
  // });
  act(() => {
    test("should fetch project data from the server", async () => {
      render(
        <ContentfulProvider>
          <ContentfulProviderContext.Consumer>
            {(data) => (
              <div>{data ? "Data fetched successfully!" : "Loading..."}</div>
            )}
          </ContentfulProviderContext.Consumer>
        </ContentfulProvider>,
      );
      
      await waitFor(() => {
        expect(screen.getByText("Data fetched successfully!")).toBeInTheDocument();
      });
    });
  });
});
