import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecentDocuments } from "../services/api";
import { Document } from "../types";

interface DocumentState {
  data: Document[];
  loading: boolean;
  error: string | null;
}

const initialState: DocumentState = { data: [], loading: false, error: null };

export const getRecentDocuments = createAsyncThunk(
  "documents/fetch",
  async () => {
    return await fetchRecentDocuments();
  }
);

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentDocuments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecentDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRecentDocuments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch documents";
      });
  },
});

export default documentSlice.reducer;
