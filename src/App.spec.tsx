import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { mockData, mockLargeData } from ".";
import { VirtuosoGridMockContext } from "react-virtuoso";


global.fetch = jest.fn() as jest.Mock;

describe("App", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: { users: mockData } }),
    });
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders loading indicator while fetching data", async () => {
    act(() => {
      render(<App />, {
        wrapper: ({ children }) => (
          <VirtuosoGridMockContext.Provider
            value={{
              viewportHeight: 300,
              viewportWidth: 300,
              itemHeight: 100,
              itemWidth: 100,
            }}
          >
            {children}
          </VirtuosoGridMockContext.Provider>
        ),
      });
    });

    expect(screen.queryByText("Loading...")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
  });

  test("Renders user information within virtuoso virtualization container", async () => {
    await act(async () => {
      render(<App />, {
        wrapper: ({ children }) => (
          <VirtuosoGridMockContext.Provider
            value={{
              viewportHeight: 300,
              viewportWidth: 300,
              itemHeight: 100,
              itemWidth: 100,
            }}
          >
            {children}
          </VirtuosoGridMockContext.Provider>
        ),
      });

      await waitFor(() =>
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
      );
    });

    // First user in mockData
    expect(screen.getByText(/Norton Berwick/i)).toBeInTheDocument();
  });

  test("displays modal with user information when the View More button is clicked", async () => {
    await act(async () => {
      render(<App />, {
        wrapper: ({ children }) => (
          <VirtuosoGridMockContext.Provider
            value={{
              viewportHeight: 300,
              viewportWidth: 300,
              itemHeight: 100,
              itemWidth: 100,
            }}
          >
            {children}
          </VirtuosoGridMockContext.Provider>
        ),
      });

      await waitFor(() =>
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
      );
    });

    const viewMoreButton = screen.getAllByRole("button", { name: "View More" })[0];
    act(() => fireEvent.click(viewMoreButton));

    await waitFor(() =>
      expect(screen.queryByRole("presentation")).toBeInTheDocument()
    );

    const firstNameDiv = screen.getByText("First name:");
    const lastNameDiv = screen.getByText("Last Name:");
    const roleDiv = screen.getByText("Role:");
    const joinDateDiv = screen.getByText("Join Date:");
    const descriptionDiv = screen.getByText("Description:");

    expect(firstNameDiv.querySelector("span")).toHaveTextContent(
      mockData[0].firstname!
    );
    expect(lastNameDiv.querySelector("span")).toHaveTextContent(
      mockData[0].lastname!
    );
    expect(roleDiv.querySelector("span")).toHaveTextContent(mockData[0].role!);
    expect(joinDateDiv.querySelector("span")).toHaveTextContent(
      mockData[0].join_date!
    );
    expect(descriptionDiv.querySelector("span")).toHaveTextContent(
      mockData[0].description!
    );
  });

  test("virtualizes results", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({ data: { users: mockLargeData } }),
    });

    await act(async () => {
      render(<App />, {
        wrapper: ({ children }) => (
          <VirtuosoGridMockContext.Provider
            value={{
              viewportHeight: 300,
              viewportWidth: 300,
              itemHeight: 100,
              itemWidth: 100,
            }}
          >
            {children}
          </VirtuosoGridMockContext.Provider>
        ),
      });

      await waitFor(() =>
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
      );
    });

    const userCardCount = screen.getAllByRole("button", { name: "View More" });
    expect(userCardCount.length).toBeLessThan(mockLargeData.length);
  });
});
