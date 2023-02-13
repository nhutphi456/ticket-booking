import { bookingApi } from "../../services/booking";

export const getBooking = async (showId: number, { rejectWithValue }: any) => {
  try {
    const res = await bookingApi.getSeats(showId);
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
};
