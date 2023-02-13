import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooking } from "./action/booking";

const initialState = {
  loading: false,
  data: [],
};

export const getBookingAction = createAsyncThunk(
  "booking/getBooking",
  async (showId: number, { rejectWithValue }) =>
    await getBooking(showId, { rejectWithValue })
);
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookingAction.pending.type]: (state) => {
      state.loading = true;
    },
    [getBookingAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    [getBookingAction.rejected.type]: (state) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export default bookingSlice.reducer;