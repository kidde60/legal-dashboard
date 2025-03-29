import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Retrieve stored user from localStorage
const storedUser = JSON.parse(localStorage.getItem("authUser") || "null");

interface AuthState {
  user: { email: string; role: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: storedUser,
  loading: false,
  error: null,
};

// Simulating login logic
export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      if (email === "admin@legaltech.com" && password === "admin123") {
        return { email, role: "admin" };
      } else if (email === "user@legaltech.com" && password === "user123") {
        return { email, role: "user" };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser"); // Clear stored data on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("authUser", JSON.stringify(action.payload)); // Persist login state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
