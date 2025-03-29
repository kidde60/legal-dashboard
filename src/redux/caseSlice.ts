import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCaseSummary } from "../services/api";
import { CaseSummary } from "../types";

interface CaseState {
  data: CaseSummary | null;
  loading: boolean;
  error: string | null;
}

const initialState: CaseState = { data: null, loading: false, error: null };

export const getCaseSummary = createAsyncThunk("cases/fetch", async () => {
  return await fetchCaseSummary();
});

const caseSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCaseSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCaseSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCaseSummary.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch case summary";
      });
  },
});

export default caseSlice.reducer;
