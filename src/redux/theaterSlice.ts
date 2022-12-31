import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  theaters: [],
};

const theaterSlice = createSlice({
  name: "theater",
  initialState,
  reducers: {
    getTheaterSystemStart: (state) => {
      state.loading = true;
    },
    getTheaterSystemSuccess: (state, action) => {
      state.theaters = action.payload;
      state.loading = false;
    },
  },
});

export const { getTheaterSystemStart, getTheaterSystemSuccess } = theaterSlice.actions;

export default theaterSlice.reducer;
