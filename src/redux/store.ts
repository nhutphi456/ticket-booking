import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import movieReducer from "./movieSlice";
import theaterReducer from "./theaterSlice";
import bookingReducer from "./bookingSlice";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    theater: theaterReducer,
    booking: bookingReducer,
    account: accountReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
