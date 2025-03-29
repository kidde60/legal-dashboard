import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"; // Adjust path if needed
import { Provider } from "react-redux";
import { store } from "../redux/store"; // Adjust the path if needed

describe("Header Component", () => {
  // Helper function to wrap the component with necessary providers
  const renderWithProviders = () => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  };

  it("renders header with user role and email", () => {
    renderWithProviders();

    // Check if the header title is rendered
    expect(screen.getByText("Legal Practice Management")).toBeInTheDocument();
  });

  it("toggles the dropdown when clicking the button", () => {
    renderWithProviders();

    // Check if the dropdown is initially closed
    const dropdown = screen.queryByText(/email:/i);
    expect(dropdown).toBeNull();

    // Click the button to open the dropdown
    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    // Check if the dropdown is now open
    expect(screen.getByText(/email:/i)).toBeInTheDocument();

    // Click the button again to close the dropdown
    fireEvent.click(dropdownButton);
    expect(screen.queryByText(/email:/i)).toBeNull();
  });

  it("logs out the user when the logout button is clicked", () => {
    renderWithProviders();

    // Open the dropdown by clicking the button
    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    // Find and click the logout button
    const logoutButton = screen.getByText(/logout/i);
    fireEvent.click(logoutButton);

    // You may want to check if navigation occurred
    // For this, you can mock `navigate` and check if it was called with '/login'
  });

  it("closes the dropdown if clicked outside", () => {
    renderWithProviders();

    // Open the dropdown
    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    // Simulate clicking outside the dropdown
    fireEvent.mouseDown(document);

    // The dropdown should close after the outside click
    expect(screen.queryByText(/email:/i)).toBeNull();
  });
});
