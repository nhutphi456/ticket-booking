import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooking } from "./action/booking";

interface State {
  loading: boolean;
  data: {
    thongTinPhim: any;
    danhSachGhe: any[];
  };
  selectedSeats: any[];
  selectedSeatIds: any[];
  displaySelectedSeats: string[];
}
const initialState: State = {
  loading: false,
  data: {
    thongTinPhim: null,
    danhSachGhe: [],
  },
  selectedSeats: [],
  selectedSeatIds: [],
  displaySelectedSeats: [],
};

export const getBookingAction = createAsyncThunk(
  "booking/getBooking",
  async (showId: number, { rejectWithValue }) =>
    await getBooking(showId, { rejectWithValue })
);
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.selectedSeats.push(action.payload);
      state.selectedSeatIds.push(action.payload.maGhe);
      state.displaySelectedSeats.push(action.payload.displaySeatId);
    },
    removeSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.maGhe !== action.payload.maGhe
      );
      state.selectedSeatIds = state.selectedSeatIds.filter(
        (sId) => sId !== action.payload.maGhe
      );
      state.displaySelectedSeats = state.displaySelectedSeats.filter(
        (sId) => sId !== action.payload.displaySeatId
      );
    },
  },
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
      state.data = {
        thongTinPhim: null,
        danhSachGhe: [],
      };
    },
  },
});

export const { addSeat, removeSeat } = bookingSlice.actions;
export default bookingSlice.reducer;
