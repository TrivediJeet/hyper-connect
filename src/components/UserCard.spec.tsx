import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import UserCard from "./UserCard";
import { User } from "..";

const mockUser: User = {
  id: "1",
  username: "testuser",
  firstname: "John",
  lastname: "John",
  email: "john.doe@example.com",
  avatar: "https://example.com/avatar.jpg",
  role: "Engineer",
  join_date: "2023-09-15",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

describe("UserCard", () => {
  test("renders avatar, name, description and a view more button", async () => {
    render(<UserCard user={mockUser} />);

    // Name
    expect(
      screen.getByRole("heading", { name: "John John" })
    ).toBeInTheDocument();

    // Description
    const descriptionElement = screen.getByText(/Lorem Ipsum/, {
      selector: ".description",
    });
    expect(descriptionElement).toBeInTheDocument();

    // View More button
    expect(
      screen.getByRole("button", { name: "View More" })
    ).toBeInTheDocument();
  });

  // Avatar
  test("renders avatar with correct src and alt", () => {
    render(<UserCard user={mockUser} />);

    const avatarElement = screen.getByAltText(
      `${mockUser.firstname} ${mockUser.lastname}`
    );
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", mockUser.avatar);
  });

  test('opens modal when "View More" button is clicked', async () => {
    render(<UserCard user={mockUser} />);

    const viewMoreButton = screen.getByRole("button", { name: "View More" });
    act(() => fireEvent.click(viewMoreButton));

    await waitFor(() =>
      expect(screen.queryByRole("presentation")).toBeInTheDocument()
    );
  });

  test("displays correct user information in modal", async () => {
    render(<UserCard user={mockUser} />);

    // Open the modal
    const viewMoreButton = screen.getByRole("button", { name: "View More" });
    fireEvent.click(viewMoreButton);

    const firstNameDiv = screen.getByText("First name:");
    const lastNameDiv = screen.getByText("Last Name:");
    const roleDiv = screen.getByText("Role:");
    const joinDateDiv = screen.getByText("Join Date:");
    const descriptionDiv = screen.getByText("Description:");

    expect(firstNameDiv.querySelector('span')).toHaveTextContent(mockUser.firstname!);
    expect(lastNameDiv.querySelector('span')).toHaveTextContent(mockUser.lastname!);
    expect(roleDiv.querySelector('span')).toHaveTextContent(mockUser.role!);
    expect(joinDateDiv.querySelector('span')).toHaveTextContent(mockUser.join_date!);
    expect(descriptionDiv.querySelector('span')).toHaveTextContent(mockUser.description!);
  });
});
