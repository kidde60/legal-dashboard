import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import caseReducer from "./caseSlice";
import documentReducer from "./documentSlice";
import timeTrackingReducer from "./timeTrackingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cases: caseReducer,
    documents: documentReducer,
    timeTracking: timeTrackingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
