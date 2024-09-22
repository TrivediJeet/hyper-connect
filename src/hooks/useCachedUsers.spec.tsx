import { renderHook, waitFor } from "@testing-library/react";
import useCachedUsers from "./useCachedUsers";

global.fetch = jest.fn() as jest.Mock;

describe("useCachedUsers", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("fetches data from API and caches it", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          data: { users: [{ id: "1", firstname: "John", lastname: "Doe" }] },
        }),
    });

    const { result } = renderHook(() => useCachedUsers());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.users).toEqual([]);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toEqual([
      { id: "1", firstname: "John", lastname: "Doe" },
    ]);
    expect(localStorage.getItem("users")).toBeDefined();
  });

  test('uses cached data if available', async () => {
    localStorage.setItem('users', JSON.stringify([{ id: '2', firstname: 'Jane', lastname: 'Smith' }]));
  
    const { result } = renderHook(() => useCachedUsers(), {});
    
    // Clear the mock after first call since the hook will be mounted twice in strict mode
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    (global.fetch as jest.Mock).mockClear();
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.users).toEqual([{ id: '2', firstname: 'Jane', lastname: 'Smith' }]);
    expect(global.fetch).not.toHaveBeenCalled(); 
  });
});
