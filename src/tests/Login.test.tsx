import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import Login from "../pages/Login";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Mock the login function to simulate a successful login
vi.mock("../api/auth", () => ({
  login: vi.fn().mockResolvedValue({ user: { email: "admin@legaltech.com" } }),
}));

test("Login Page > displays error message on failed login", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Fill out the login form with invalid credentials
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "wrong@legaltech.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "wrongpassword" },
  });

  // Submit the form
  fireEvent.click(screen.getByRole("button", { name: /login/i }));

  // Wait for the error message to appear
  await waitFor(() =>
    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument()
  );
});
