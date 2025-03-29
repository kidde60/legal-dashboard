import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/Sidebar";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Sidebar Component", () => {
  test("renders sidebar with menu items", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    // Check if the sidebar contains specific menu items
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  test("highlights the active menu item", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>
    );

    // Simulate a click on the "Dashboard" item
    fireEvent.click(screen.getByText(/dashboard/i));

    // Check if the dashboard menu item is highlighted
    expect(screen.getByText(/dashboard/i)).toHaveClass("hover:bg-[#103B3B]");
  });
});
