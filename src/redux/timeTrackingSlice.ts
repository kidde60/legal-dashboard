import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTimeTracking } from "../services/api";
import { TimeTracking } from "../types";

interface TimeTrackingState {
  data: TimeTracking[];
  loading: boolean;
  error: string | null;
}

const initialState: TimeTrackingState = {
  data: [],
  loading: false,
  error: null,
};

export const getTimeTracking = createAsyncThunk(
  "timeTracking/fetch",
  async () => {
    return await fetchTimeTracking();
  }
);

const timeTrackingSlice = createSlice({
  name: "timeTracking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTimeTracking.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTimeTracking.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTimeTracking.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch time tracking data";
      });
  },
});

export default timeTrackingSlice.reducer;
